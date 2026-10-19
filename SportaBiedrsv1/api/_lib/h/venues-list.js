'use strict';
/* GET /api/venues -> venues that can be booked online (enabled by an admin AND with at least one court).
 * The frontend matches these to map pins by name. An empty list keeps the old behaviour. */

const { send, handler } = require('../http');
const db = require('../db');

module.exports = handler(['GET'], async (_req, res) => {
  if (!db.configured()) return send(res, 200, [], { 'Cache-Control': 'public, s-maxage=60' });
  const rows = await db.query(
    `SELECT v.id, v.name, v.provider, v.external_id, v.timezone,
            c.id AS court_id, c.name AS court_name, c.price_cents, c.slot_minutes
     FROM venues v JOIN courts c ON c.venue_id = v.id AND c.active
     WHERE v.active ORDER BY v.name, c.name`,
  );
  const byId = new Map();
  for (const r of rows) {
    if (!byId.has(r.id)) byId.set(r.id, { id: r.id, name: r.name, provider: r.provider, externalId: r.external_id, timezone: r.timezone, courts: [] });
    byId.get(r.id).courts.push({ id: r.court_id, name: r.court_name, priceCents: r.price_cents, slotMinutes: r.slot_minutes });
  }
  return send(res, 200, [...byId.values()], { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' });
});
