'use strict';
/* POST /api/bookings/cancel  { id }  -> cancels your booking; full refund until 24 h before the start. */

const { send, readJson, clean, handler } = require('../http');
const db = require('../db');
const { requireUser } = require('../auth');
const { cancelBooking } = require('../booking');

module.exports = handler(['POST'], async (req, res) => {
  if (!db.configured()) throw db.notConfigured();
  const { userId } = await requireUser(req);
  const body = await readJson(req);
  return send(res, 200, await cancelBooking({ id: clean(body.id, 80), userId }));
});
