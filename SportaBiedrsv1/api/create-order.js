'use strict';
/* POST /api/create-order  (cash on delivery)
 * Validates the order with server prices, assigns an order number and emails
 * the shop owner and the customer. There is no database yet: the email IS the
 * order record. If email is not configured the request is refused, so a
 * customer is never told "order accepted" for an order nobody received. */

const { send, readJson, rateLimit, newOrderNo, handler } = require('./_lib/http');
const { priceItems, validateCustomer, totals, eur } = require('./_lib/order');
const { sendMail, configured, ownerAddress, orderHtml } = require('./_lib/mail');

module.exports = handler(['POST'], async (req, res) => {
  const owner = ownerAddress();
  if (!configured() || !owner) {
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

  const html = orderHtml({ orderNo, customer, lines, totals: t, paymentLabel: 'Skaidra nauda pie kurjera', eur });
  await sendMail({ to: owner, subject: `Jauns pasūtījums ${orderNo} (${eur(t.total)})`, html, replyTo: customer.email });
  // The customer copy is best-effort: the owner already has the order.
  sendMail({ to: customer.email, subject: `Tavs pasūtījums ${orderNo} · SportaBiedrs`, html }).catch((e) => console.error('[mail]', e.message));

  return send(res, 200, { ok: true, orderNo, total: t.total });
});
