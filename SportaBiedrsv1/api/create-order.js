'use strict';
/* POST /api/create-order  (cash on delivery)
 * Validates the order with server prices, assigns an order number and emails
 * the shop owner and the customer, and stores it in the database when one is
 * configured. If neither email nor storage is available the request is refused,
 * so a customer is never told "order accepted" for an order nobody received. */

const { send, readJson, rateLimit, newOrderNo, handler } = require('./_lib/http');
const { priceItems, validateCustomer, totals, eur } = require('./_lib/order');
const { sendMail, configured, ownerAddress, orderHtml } = require('./_lib/mail');
const { optionalUser, ensureUser } = require('./_lib/auth');
const { saveOrder } = require('./_lib/orders-db');
const dbm = require('./_lib/db');

module.exports = handler(['POST'], async (req, res) => {
  const owner = ownerAddress();
  const canEmail = configured() && owner;
  if (!canEmail && !dbm.configured()) {
    return send(res, 503, { error: 'Orders are not enabled yet', code: 'ORDERS_NOT_CONFIGURED' });
  }
  if (!rateLimit(req, 'order', 5, 10 * 60 * 1000)) {
    return send(res, 429, { error: 'Too many attempts, try again later', code: 'RATE_LIMITED' });
  }

  const body = await readJson(req);
  if (body.website) return send(res, 200, { ok: true, orderNo: newOrderNo() }); // honeypot: pretend success
  const lines = priceItems(body.items);
  const customer = validateCustomer(body);
  const t = totals(lines, customer.method);
  const orderNo = newOrderNo();

  let userId = null;
  if (dbm.configured()) {
    const who = await optionalUser(req).catch(() => null);
    if (who) { userId = who.userId; await ensureUser(userId, { email: customer.email, name: customer.name }).catch(() => { userId = null; }); }
  }
  const saved = await saveOrder({ id: orderNo, userId, customer, lines, totals: t, paymentMethod: 'cash', status: 'new' });
  if (!saved && !canEmail) throw Object.assign(new Error('Could not record the order'), { status: 503, code: 'ORDERS_NOT_RECORDED' });

  const html = orderHtml({ orderNo, customer, lines, totals: t, paymentLabel: 'Skaidra nauda pie kurjera', eur });
  if (canEmail) {
    await sendMail({ to: owner, subject: `Jauns pasūtījums ${orderNo} (${eur(t.total)})`, html, replyTo: customer.email }).catch((e) => { if (!saved) throw e; console.error('[mail]', e.message); });
    // The customer copy is best-effort: the owner already has the order.
    sendMail({ to: customer.email, subject: `Tavs pasūtījums ${orderNo} · SportaBiedrs`, html }).catch((e) => console.error('[mail]', e.message));
  }

  return send(res, 200, { ok: true, orderNo, total: t.total });
});
