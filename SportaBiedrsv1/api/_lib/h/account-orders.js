'use strict';
/* GET /api/orders -> the signed-in user's shop orders with items, newest first. */

const { send, handler } = require('../http');
const db = require('../db');
const { requireUser } = require('../auth');

module.exports = handler(['GET'], async (req, res) => {
  if (!db.configured()) throw db.notConfigured();
  const { userId } = await requireUser(req);
  const orders = await db.query(
    `SELECT id, status, payment_method, delivery_method, destination, subtotal_cents, shipping_cents, total_cents, created_at
     FROM orders WHERE user_id = $1 AND status <> 'pending_payment' ORDER BY created_at DESC LIMIT 50`, [userId]);
  const items = orders.length ? await db.query('SELECT order_id, product_id, name, variant, unit_cents, quantity FROM order_items WHERE order_id = ANY($1::text[])', [orders.map((o) => o.id)]) : [];
  return send(res, 200, orders.map((o) => ({
    id: o.id, status: o.status, payment: o.payment_method, delivery: o.delivery_method, destination: o.destination,
    subtotalCents: o.subtotal_cents, shippingCents: o.shipping_cents, totalCents: o.total_cents, createdAt: o.created_at,
    items: items.filter((i) => i.order_id === o.id).map((i) => ({ productId: i.product_id, name: i.name, variant: i.variant, unitCents: i.unit_cents, quantity: i.quantity })),
  })));
});
