'use strict';
/* Court booking rules: slots, holds, confirmation, refunds.
 *
 * Double-booking protection: every hold runs in a transaction that first locks
 * the court row (SELECT ... FOR UPDATE), then checks for overlapping bookings.
 * A booking blocks a slot when it is 'confirmed', or 'pending' and its 15-minute
 * hold has not expired. */

const crypto = require('crypto');
const db = require('./db');
const { zonedToUtc, hhmm } = require('./time');
const { stripe } = require('./stripe');
const { sendMail, ownerAddress } = require('./mail');
const { escHtml } = require('./http');

const HOLD_MINUTES = 15;
const MIN_LEAD_MINUTES = 30;
const MAX_DAYS_AHEAD = 60;
const CANCEL_HOURS = 24;

const newBookingId = () => 'bk_' + crypto.randomBytes(9).toString('hex');
const BLOCKING = `(status = 'confirmed' OR (status = 'pending' AND expires_at > now()))`;

/** Courts of a venue with their free/busy slots on a local date. Returns the shape the frontend expects. */
async function slotsFor(venue, courts, date) {
  const tz = venue.timezone || 'Europe/Riga';
  const dayStart = zonedToUtc(date, 0, 0, tz);
  const dayEnd = new Date(dayStart.getTime() + 36 * 3600_000); // covers DST days
  const booked = await db.query(
    `SELECT court_id, start_at, end_at FROM bookings
     WHERE court_id = ANY($1::text[]) AND ${BLOCKING} AND start_at < $3 AND end_at > $2`,
    [courts.map((c) => c.id), dayStart.toISOString(), dayEnd.toISOString()],
  );
  const earliest = Date.now() + MIN_LEAD_MINUTES * 60_000;
  const latest = Date.now() + MAX_DAYS_AHEAD * 86400_000;
  const merged = new Map(); // "HH:MM-HH:MM" -> slot

  for (const court of courts) {
    const step = court.slot_minutes * 60_000;
    const open = zonedToUtc(date, venue.open_hour, 0, tz).getTime();
    const close = zonedToUtc(date, venue.close_hour, 0, tz).getTime();
    for (let t = open; t + step <= close; t += step) {
      const start = new Date(t);
      const end = new Date(t + step);
      const key = `${hhmm(start, tz)}-${hhmm(end, tz)}`;
      const busy = booked.some((b) => b.court_id === court.id && new Date(b.start_at).getTime() < end.getTime() && new Date(b.end_at).getTime() > t);
      const ok = !busy && t >= earliest && t <= latest;
      const slot = merged.get(key) || { start: hhmm(start, tz), end: hhmm(end, tz), courtId: null, available: false, priceCents: court.price_cents };
      if (ok && !slot.available) {
        slot.available = true;
        slot.courtId = court.id;
        slot.priceCents = court.price_cents;
      }
      merged.set(key, slot);
    }
  }
  return [...merged.values()].sort((a, b) => a.start.localeCompare(b.start));
}

/** Validates that [start,end) is a real slot of this court. Throws 400 with a clear message. */
function validateSlot(venue, court, start, end) {
  const bad = (m, c) => Object.assign(new Error(m), { status: 400, code: c });
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) throw bad('Invalid time', 'BAD_TIME');
  const step = court.slot_minutes * 60_000;
  if (end.getTime() - start.getTime() !== step) throw bad('Invalid slot length', 'BAD_SLOT');
  const tz = venue.timezone || 'Europe/Riga';
  const localDate = new Intl.DateTimeFormat('en-CA', { timeZone: tz }).format(start); // YYYY-MM-DD
  const open = zonedToUtc(localDate, venue.open_hour, 0, tz).getTime();
  const close = zonedToUtc(localDate, venue.close_hour, 0, tz).getTime();
  if (start.getTime() < open || end.getTime() > close || (start.getTime() - open) % step !== 0) throw bad('Time is outside opening hours', 'BAD_SLOT');
  if (start.getTime() < Date.now() + MIN_LEAD_MINUTES * 60_000) throw bad('This time is too soon to book', 'TOO_SOON');
  if (start.getTime() > Date.now() + MAX_DAYS_AHEAD * 86400_000) throw bad('This date is too far ahead', 'TOO_FAR');
}

/** Creates a 15 minute pending hold, or throws 409 if the slot is taken. */
async function createHold({ court, userId, start, end, idempotencyKey }) {
  return db.tx(async (c) => {
    await c.query('SELECT id FROM courts WHERE id = $1 FOR UPDATE', [court.id]);
    const clash = await c.query(
      `SELECT 1 FROM bookings WHERE court_id = $1 AND ${BLOCKING} AND start_at < $3 AND end_at > $2 LIMIT 1`,
      [court.id, start.toISOString(), end.toISOString()],
    );
    if (clash.rows.length) throw Object.assign(new Error('This time was just taken'), { status: 409, code: 'SLOT_TAKEN' });
    const id = newBookingId();
    const expires = new Date(Date.now() + HOLD_MINUTES * 60_000);
    await c.query(
      `INSERT INTO bookings (id, court_id, user_id, start_at, end_at, status, amount_cents, idempotency_key, expires_at)
       VALUES ($1,$2,$3,$4,$5,'pending',$6,$7,$8)`,
      [id, court.id, userId, start.toISOString(), end.toISOString(), court.price_cents, idempotencyKey || null, expires.toISOString()],
    );
    return { id, expires };
  });
}

async function bookingDetails(id) {
  const rows = await db.query(
    `SELECT b.*, c.name AS court_name, v.name AS venue_name, v.city, v.address, v.timezone, v.contact_email,
            u.email AS user_email, u.name AS user_name
     FROM bookings b JOIN courts c ON c.id = b.court_id JOIN venues v ON v.id = c.venue_id JOIN users u ON u.id = b.user_id
     WHERE b.id = $1`,
    [id],
  );
  return rows[0] || null;
}

function when(b) {
  const tz = b.timezone || 'Europe/Riga';
  const d = new Intl.DateTimeFormat('lv-LV', { timeZone: tz, dateStyle: 'long' }).format(new Date(b.start_at));
  return `${d}, ${hhmm(new Date(b.start_at), tz)}–${hhmm(new Date(b.end_at), tz)}`;
}

async function notifyConfirmed(b) {
  const html = `<div style="font-family:system-ui,sans-serif;max-width:520px"><h2>Rezervācija apstiprināta</h2>
<p><strong>${escHtml(b.venue_name)}</strong> · ${escHtml(b.court_name)}<br>${escHtml(when(b))}<br>${escHtml(b.address || '')}, ${escHtml(b.city || '')}</p>
<p>Samaksāts: ${(b.amount_cents / 100).toFixed(2)} €. Atcelšana ar pilnu atmaksu iespējama līdz ${CANCEL_HOURS} h pirms sākuma.</p>
<p>Rezervācijas Nr. ${escHtml(b.id)}</p></div>`;
  const jobs = [];
  if (b.user_email) jobs.push(sendMail({ to: b.user_email, subject: `Rezervācija apstiprināta · ${b.venue_name}`, html }));
  const to = [b.contact_email, ownerAddress()].filter(Boolean);
  if (to.length) jobs.push(sendMail({ to, subject: `Jauna rezervācija · ${b.venue_name} · ${when(b)}`, html }));
  await Promise.allSettled(jobs);
}

/** Called by the Stripe webhook when a booking payment succeeded. Safe to call twice. */
async function confirmPaid({ bookingId, paymentIntentId }) {
  const result = await db.tx(async (c) => {
    const { rows } = await c.query('SELECT * FROM bookings WHERE id = $1 FOR UPDATE', [bookingId]);
    const b = rows[0];
    if (!b) return { action: 'unknown' };
    if (b.payment_intent_id && b.payment_intent_id !== paymentIntentId) return { action: 'mismatch' };
    if (b.status === 'confirmed') return { action: 'already' };
    if (b.status === 'refunded') return { action: 'already' };
    await c.query('SELECT id FROM courts WHERE id = $1 FOR UPDATE', [b.court_id]);
    const lapsed = b.status !== 'pending' || (b.expires_at && new Date(b.expires_at).getTime() <= Date.now());
    if (lapsed) {
      // Paid after the hold lapsed: only keep it if nobody else took the slot meanwhile.
      const clash = await c.query(
        `SELECT 1 FROM bookings WHERE court_id = $1 AND id <> $2 AND ${BLOCKING} AND start_at < $4 AND end_at > $3 LIMIT 1`,
        [b.court_id, b.id, b.start_at, b.end_at],
      );
      if (clash.rows.length) {
        await c.query(`UPDATE bookings SET status = 'refunded', payment_intent_id = $2 WHERE id = $1`, [b.id, paymentIntentId]);
        return { action: 'refund' };
      }
    }
    await c.query(`UPDATE bookings SET status = 'confirmed', payment_intent_id = $2, expires_at = NULL WHERE id = $1`, [b.id, paymentIntentId]);
    return { action: 'confirmed' };
  });

  if (result.action === 'refund') {
    try {
      await stripe('POST', '/refunds', { payment_intent: paymentIntentId, reason: 'duplicate' }, { idempotencyKey: `refund-${bookingId}` });
    } catch (e) {
      console.error('[booking] AUTO-REFUND FAILED, refund manually in Stripe:', paymentIntentId, e.message);
    }
    const owner = ownerAddress();
    if (owner) await sendMail({ to: owner, subject: 'Rezervācija automātiski atmaksāta (laiks jau aizņemts)', html: `<p>Maksājums ${escHtml(paymentIntentId)} tika atmaksāts, jo laiks bija aizņemts. Rezervācija ${escHtml(bookingId)}.</p>` }).catch(() => {});
  } else if (result.action === 'confirmed') {
    const details = await bookingDetails(bookingId);
    if (details) await notifyConfirmed(details);
  }
  return result;
}

/** User cancels. Full refund when at least CANCEL_HOURS before the start. */
async function cancelBooking({ id, userId }) {
  const b = await bookingDetails(id);
  if (!b || b.user_id !== userId) throw Object.assign(new Error('Booking not found'), { status: 404, code: 'NOT_FOUND' });
  if (b.status === 'cancelled' || b.status === 'refunded' || b.status === 'expired') return { status: b.status };
  if (b.status === 'pending') {
    await db.query(`UPDATE bookings SET status = 'expired', expires_at = now() WHERE id = $1 AND status = 'pending'`, [id]);
    if (b.payment_intent_id) await stripe('POST', `/payment_intents/${b.payment_intent_id}/cancel`).catch(() => {});
    return { status: 'expired' };
  }
  const hoursLeft = (new Date(b.start_at).getTime() - Date.now()) / 3600_000;
  if (hoursLeft < CANCEL_HOURS) {
    throw Object.assign(new Error(`Free cancellation ends ${CANCEL_HOURS} hours before the start`), { status: 409, code: 'TOO_LATE_TO_CANCEL' });
  }
  if (b.payment_intent_id) {
    await stripe('POST', '/refunds', { payment_intent: b.payment_intent_id }, { idempotencyKey: `cancel-${id}` });
  }
  await db.query(`UPDATE bookings SET status = 'refunded' WHERE id = $1`, [id]);
  const to = [b.contact_email, ownerAddress()].filter(Boolean);
  if (to.length) await sendMail({ to, subject: `Rezervācija atcelta · ${b.venue_name} · ${when(b)}`, html: `<p>${escHtml(b.user_name || b.user_email || 'Klients')} atcēla rezervāciju ${escHtml(b.id)}. Atmaksa veikta.</p>` }).catch(() => {});
  return { status: 'refunded' };
}

module.exports = { slotsFor, validateSlot, createHold, confirmPaid, cancelBooking, bookingDetails, HOLD_MINUTES, CANCEL_HOURS };
