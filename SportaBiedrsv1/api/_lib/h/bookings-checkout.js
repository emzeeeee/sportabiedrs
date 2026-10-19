'use strict';
/* POST /api/bookings/checkout  (signed-in users)
 * Body: { court_id, start_time, end_time, user: { email, name } }  Header: Idempotency-Key
 * Holds the slot for 15 minutes, creates a Stripe PaymentIntent with the SERVER price
 * and returns { clientSecret, bookingId, expiresAt } for Stripe's Payment Element. */

const { send, readJson, rateLimit, clean, isEmail, handler } = require('../http');
const db = require('../db');
const { requireUser } = require('../auth');
const { stripe, configured } = require('../stripe');
const { validateSlot, createHold } = require('../booking');

module.exports = handler(['POST'], async (req, res) => {
  if (!db.configured()) throw db.notConfigured();
  if (!configured()) return send(res, 503, { error: 'Online payment is not configured', code: 'STRIPE_NOT_CONFIGURED' });
  if (!rateLimit(req, 'bk-checkout', 15, 10 * 60_000)) return send(res, 429, { error: 'Too many attempts, try again later', code: 'RATE_LIMITED' });

  const body = await readJson(req);
  const email = clean(body.user?.email, 254).toLowerCase();
  const name = clean(body.user?.name, 120);
  const { userId } = await requireUser(req, { email, name });
  if (!isEmail(email)) return send(res, 400, { error: 'Valid email is required', code: 'BAD_EMAIL' });

  const [court] = await db.query(
    `SELECT c.*, v.id AS vid, v.timezone, v.open_hour, v.close_hour, v.name AS venue_name, v.active AS venue_active
     FROM courts c JOIN venues v ON v.id = c.venue_id WHERE c.id = $1`,
    [clean(body.court_id, 80)],
  );
  if (!court || !court.active || !court.venue_active) return send(res, 404, { error: 'Court not available', code: 'COURT_NOT_FOUND' });

  const start = new Date(body.start_time);
  const end = new Date(body.end_time);
  validateSlot(court, court, start, end);

  // Same user retrying the same slot with the same key: hand back the existing payment.
  const key = clean(req.headers['idempotency-key'], 100) || null;
  let useKey = key;
  if (key) {
    const [prev] = await db.query('SELECT * FROM bookings WHERE user_id = $1 AND idempotency_key = $2', [userId, key]);
    if (prev) {
      const same = prev.court_id === court.id && new Date(prev.start_at).getTime() === start.getTime();
      if (same && prev.status === 'confirmed') return send(res, 409, { error: 'Already booked', code: 'ALREADY_BOOKED', bookingId: prev.id });
      if (same && prev.status === 'pending' && new Date(prev.expires_at) > new Date() && prev.payment_intent_id) {
        const pi = await stripe('GET', `/payment_intents/${prev.payment_intent_id}`);
        if (pi.client_secret) return send(res, 200, { clientSecret: pi.client_secret, bookingId: prev.id, expiresAt: prev.expires_at, amountCents: prev.amount_cents });
      }
      useKey = null; // key was used for a different slot: do not reuse it
    }
  }

  const hold = await createHold({ court, userId, start, end, idempotencyKey: useKey });
  try {
    const pi = await stripe('POST', '/payment_intents', {
      amount: String(court.price_cents),
      currency: 'eur',
      'automatic_payment_methods[enabled]': 'true',
      receipt_email: email,
      description: `${court.venue_name} · ${court.name} · ${start.toISOString()}`.slice(0, 250),
      'metadata[booking_id]': hold.id,
      'metadata[user_id]': userId,
    }, { idempotencyKey: `bk-${hold.id}` });
    await db.query('UPDATE bookings SET payment_intent_id = $2 WHERE id = $1', [hold.id, pi.id]);
    return send(res, 200, { clientSecret: pi.client_secret, bookingId: hold.id, expiresAt: hold.expires.toISOString(), amountCents: court.price_cents });
  } catch (e) {
    await db.query(`UPDATE bookings SET status = 'expired', expires_at = now() WHERE id = $1`, [hold.id]);
    throw e;
  }
});
