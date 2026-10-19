'use strict';
/* GET /api/venues/:id/slots?date=YYYY-MM-DD -> [{ start, end, courtId, available, priceCents }] in venue-local time. */

const { send, handler, rateLimit } = require('../../_lib/http');
const db = require('../../_lib/db');
const { slotsFor } = require('../../_lib/booking');
const { isDate } = require('../../_lib/time');

module.exports = handler(['GET'], async (req, res) => {
  if (!db.configured()) throw db.notConfigured();
  if (!rateLimit(req, 'slots', 120, 60_000)) return send(res, 429, { error: 'Too many requests', code: 'RATE_LIMITED' });
  const id = String(req.query?.id || new URL(req.url, 'http://x').pathname.split('/')[3] || '');
  const date = String(req.query?.date || '');
  if (!isDate(date)) return send(res, 400, { error: 'date must be YYYY-MM-DD', code: 'BAD_DATE' });
  const [venue] = await db.query('SELECT * FROM venues WHERE id = $1 AND active', [id]);
  if (!venue) return send(res, 404, { error: 'Venue not found', code: 'NOT_FOUND' });
  const courts = await db.query('SELECT * FROM courts WHERE venue_id = $1 AND active ORDER BY name', [id]);
  if (!courts.length) return send(res, 200, []);
  return send(res, 200, await slotsFor(venue, courts, date), { 'Cache-Control': 'no-store' });
});
