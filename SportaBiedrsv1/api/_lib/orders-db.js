'use strict';
/* Persists shop orders. Best-effort by design: a database hiccup must never
 * stop a customer from paying, so failures are logged and the caller carries on
 * (the email to the owner remains the fallback record). */

const db = require('./db');

async function saveOrder({ id, userId, customer, lines, totals, paymentMethod, status, sessionId }) {
  if (!db.configured()) return false;
  try {
    await db.tx(async (c) => {
      await c.query(
        `INSERT INTO orders (id, user_id, email, name, delivery_method, destination, payment_method, status, subtotal_cents, shipping_cents, total_cents, stripe_session_id)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
         ON CONFLICT (id) DO NOTHING`,
        [id, userId || null, customer.email, customer.name, customer.method, customer.destination, paymentMethod, status, totals.subtotal, totals.shipping, totals.total, sessionId || null],
      );
      for (const l of lines) {
        await c.query(
          'INSERT INTO order_items (order_id, product_id, name, variant, unit_cents, quantity) VALUES ($1,$2,$3,$4,$5,$6)',
          [id, l.id, l.name, l.variant || null, l.cents, l.quantity],
        );
      }
    });
    return true;
  } catch (e) {
    console.error('[orders] save failed', e.message);
    return false;
  }
}

async function attachSession(orderId, sessionId) {
  if (!db.configured()) return;
  try { await db.query('UPDATE orders SET stripe_session_id = $2 WHERE id = $1', [orderId, sessionId]); } catch (e) { console.error('[orders] attach failed', e.message); }
}

async function markPaid(orderId) {
  if (!db.configured()) return false;
  try {
    const r = await db.query(`UPDATE orders SET status = 'paid' WHERE id = $1 AND status <> 'paid' RETURNING id`, [orderId]);
    return r.length > 0;
  } catch (e) { console.error('[orders] markPaid failed', e.message); return false; }
}

module.exports = { saveOrder, attachSession, markPaid };
