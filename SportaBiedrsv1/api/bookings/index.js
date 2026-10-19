'use strict';
/* GET /api/bookings -> the signed-in user's bookings, newest first. */

const { send, handler } = require('../_lib/http');
const db = require('../_lib/db');
const { requireUser } = require('../_lib/auth');
const { hhmm } = require('../_lib/time');
const { CANCEL_HOURS } = require('../_lib/booking');

module.exports = handler(['GET'], async (req, res) => {
  if (!db.configured()) throw db.notConfigured();
  const { userId } = await requireUser(req);
  const rows = await db.query(
    `SELECT b.id, b.status, b.start_at, b.end_at, b.amount_cents, b.created_at, c.name AS court, v.name AS venue, v.city, v.address, v.timezone
     FROM bookings b JOIN courts c ON c.id = b.court_id JOIN venues v ON v.id = c.venue_id
     WHERE b.user_id = $1 AND NOT (b.status = 'expired') AND NOT (b.status = 'pending' AND b.expires_at < now())
     ORDER BY b.start_at DESC LIMIT 100`,
    [userId],
  );
  return send(res, 200, rows.map((r) => ({
    id: r.id, status: r.status, venue: r.venue, court: r.court, city: r.city, address: r.address,
    start: r.start_at, end: r.end_at, localStart: hhmm(new Date(r.start_at), r.timezone), localEnd: hhmm(new Date(r.end_at), r.timezone),
    amountCents: r.amount_cents,
    canCancel: r.status === 'confirmed' && new Date(r.start_at).getTime() - Date.now() >= CANCEL_HOURS * 3600_000,
  })));
});
