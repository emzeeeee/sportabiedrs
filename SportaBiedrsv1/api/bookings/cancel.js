'use strict';
/* POST /api/bookings/cancel  { id }  -> cancels your booking; full refund until 24 h before the start. */

const { send, readJson, clean, handler } = require('../_lib/http');
const db = require('../_lib/db');
const { requireUser } = require('../_lib/auth');
const { cancelBooking } = require('../_lib/booking');

module.exports = handler(['POST'], async (req, res) => {
  if (!db.configured()) throw db.notConfigured();
  const { userId } = await requireUser(req);
  const body = await readJson(req);
  return send(res, 200, await cancelBooking({ id: clean(body.id, 80), userId }));
});
