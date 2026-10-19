'use strict';
/* GET /api/me -> creates your account record on first sign-in and returns your profile + counts. */

const { send, handler } = require('../http');
const db = require('../db');
const { requireUser } = require('../auth');

module.exports = handler(['GET'], async (req, res) => {
  if (!db.configured()) throw db.notConfigured();
  const { userId } = await requireUser(req);
  const [u] = await db.query('SELECT id, email, name, created_at FROM users WHERE id = $1', [userId]);
  const [b] = await db.query(`SELECT count(*)::int AS n FROM bookings WHERE user_id = $1 AND status = 'confirmed'`, [userId]);
  const [o] = await db.query('SELECT count(*)::int AS n FROM orders WHERE user_id = $1', [userId]);
  return send(res, 200, { id: u.id, email: u.email, name: u.name, memberSince: u.created_at, bookings: b.n, orders: o.n });
});
