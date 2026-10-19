'use strict';
/* /api/admin  (header  x-admin-token: <ADMIN_TOKEN>, at least 16 characters)
 *  GET  ?view=applications|venues|bookings|orders
 *  POST { action: 'upsert_venue',  venue: {...}, courts: [{ name, price_eur, slot_minutes }] }
 *  POST { action: 'review_application', id, decision: 'approve'|'reject', lat, lng, courts: [...] }
 *  POST { action: 'set_venue_active', id, active }
 * This is how a venue becomes bookable online: nothing is bookable until you add courts here. */

const { send, readJson, clean, handler } = require('./_lib/http');
const db = require('./_lib/db');
const { requireAdmin } = require('./_lib/auth');

const slug = (s) => String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
const num = (v, d) => (v === undefined || v === null || v === '' ? d : Number(v));

async function upsertVenue(c, v, courts) {
  const name = clean(v.name, 120);
  if (name.length < 2) throw Object.assign(new Error('Venue name required'), { status: 400, code: 'BAD_NAME' });
  const open = num(v.open_hour, 8), close = num(v.close_hour, 22);
  if (![open, close].every(Number.isInteger) || open < 0 || close > 24 || open >= close) throw Object.assign(new Error('Invalid opening hours'), { status: 400, code: 'BAD_HOURS' });
  const existing = (await c.query('SELECT id FROM venues WHERE lower(name) = lower($1)', [name])).rows[0];
  const id = existing?.id || clean(v.id, 60) || `${slug(name)}-${Math.random().toString(36).slice(2, 6)}`;
  await c.query(
    `INSERT INTO venues (id, name, sport_key, city, address, timezone, open_hour, close_hour, provider, external_id, contact_email, lat, lng, website, active)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,true)
     ON CONFLICT (id) DO UPDATE SET sport_key=EXCLUDED.sport_key, city=EXCLUDED.city, address=EXCLUDED.address, timezone=EXCLUDED.timezone,
       open_hour=EXCLUDED.open_hour, close_hour=EXCLUDED.close_hour, contact_email=EXCLUDED.contact_email,
       lat=COALESCE(EXCLUDED.lat, venues.lat), lng=COALESCE(EXCLUDED.lng, venues.lng), website=COALESCE(EXCLUDED.website, venues.website)`,
    [id, name, clean(v.sport_key, 30) || null, clean(v.city, 80) || null, clean(v.address, 200) || null, clean(v.timezone, 40) || 'Europe/Riga', open, close,
      'sportabiedrs', clean(v.external_id, 80) || null, clean(v.contact_email, 254).toLowerCase() || null,
      Number.isFinite(num(v.lat, NaN)) ? Number(v.lat) : null, Number.isFinite(num(v.lng, NaN)) ? Number(v.lng) : null, clean(v.website, 300) || null],
  );
  let i = 0;
  for (const court of courts || []) {
    i += 1;
    const cents = Math.round(Number(court.price_eur) * 100);
    const step = num(court.slot_minutes, 60);
    if (!(cents > 0 && cents < 100_000)) throw Object.assign(new Error('Court price must be between 0.01 and 999.99 EUR'), { status: 400, code: 'BAD_PRICE' });
    if (!Number.isInteger(step) || step < 15 || step > 240) throw Object.assign(new Error('slot_minutes must be 15-240'), { status: 400, code: 'BAD_SLOT_MINUTES' });
    await c.query(
      `INSERT INTO courts (id, venue_id, name, sport_key, price_cents, slot_minutes, active) VALUES ($1,$2,$3,$4,$5,$6,true)
       ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price_cents=EXCLUDED.price_cents, slot_minutes=EXCLUDED.slot_minutes, active=true`,
      [`${id}-c${i}`, id, clean(court.name, 80) || `Court ${i}`, clean(v.sport_key, 30) || null, cents, step],
    );
  }
  return id;
}

module.exports = handler(['GET', 'POST'], async (req, res) => {
  requireAdmin(req);
  if (!db.configured()) throw db.notConfigured();

  if (req.method === 'GET') {
    const view = String(req.query?.view || new URL(req.url, 'http://x').searchParams.get('view') || 'applications');
    const q = {
      applications: `SELECT * FROM club_applications ORDER BY created_at DESC LIMIT 200`,
      venues: `SELECT v.*, (SELECT count(*) FROM courts c WHERE c.venue_id = v.id AND c.active) AS courts FROM venues v ORDER BY v.name`,
      bookings: `SELECT b.id, b.status, b.start_at, b.amount_cents, v.name AS venue, c.name AS court, u.email FROM bookings b JOIN courts c ON c.id=b.court_id JOIN venues v ON v.id=c.venue_id JOIN users u ON u.id=b.user_id ORDER BY b.created_at DESC LIMIT 200`,
      orders: `SELECT * FROM orders ORDER BY created_at DESC LIMIT 200`,
    }[view];
    if (!q) return send(res, 400, { error: 'Unknown view', code: 'BAD_VIEW' });
    return send(res, 200, await db.query(q));
  }

  const b = await readJson(req);
  if (b.action === 'upsert_venue') {
    const id = await db.tx((c) => upsertVenue(c, b.venue || {}, b.courts));
    return send(res, 200, { ok: true, venueId: id });
  }
  if (b.action === 'set_venue_active') {
    await db.query('UPDATE venues SET active = $2 WHERE id = $1', [clean(b.id, 60), Boolean(b.active)]);
    return send(res, 200, { ok: true });
  }
  if (b.action === 'review_application') {
    const id = clean(b.id, 60);
    const decision = b.decision === 'approve' ? 'approve' : b.decision === 'reject' ? 'reject' : null;
    if (!decision) return send(res, 400, { error: 'decision must be approve or reject', code: 'BAD_DECISION' });
    const out = await db.tx(async (c) => {
      const app = (await c.query('SELECT * FROM club_applications WHERE id = $1 FOR UPDATE', [id])).rows[0];
      if (!app) throw Object.assign(new Error('Application not found'), { status: 404, code: 'NOT_FOUND' });
      if (app.status !== 'pending') throw Object.assign(new Error('Already reviewed'), { status: 409, code: 'ALREADY_REVIEWED' });
      let venueId = null;
      if (decision === 'approve') {
        venueId = await upsertVenue(c, { name: app.name, sport_key: app.sport_key, city: app.city, address: app.address, website: app.website, contact_email: app.email, lat: b.lat, lng: b.lng }, b.courts);
      }
      await c.query(`UPDATE club_applications SET status = $2, venue_id = $3, reviewed_at = now() WHERE id = $1`, [id, decision === 'approve' ? 'approved' : 'rejected', venueId]);
      return { venueId };
    });
    return send(res, 200, { ok: true, ...out });
  }
  return send(res, 400, { error: 'Unknown action', code: 'BAD_ACTION' });
});
