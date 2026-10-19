'use strict';
/* POST /api/create-checkout-session
 * Creates a Stripe Checkout session. Prices come from api/_lib/catalog.json,
 * never from the browser. Returns { url } for the frontend to redirect to. */

const { send, readJson, rateLimit, siteUrl, clean, newOrderNo, handler } = require('./_lib/http');
const { optionalUser, ensureUser } = require('./_lib/auth');
const { saveOrder, attachSession } = require('./_lib/orders-db');
const dbm = require('./_lib/db');
const { priceItems, validateCustomer, totals } = require('./_lib/order');

const LOCALES = { lv: 'lv', en: 'en', ru: 'ru' };

module.exports = handler(['POST'], async (req, res) => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return send(res, 503, { error: 'Online payment is not configured', code: 'STRIPE_NOT_CONFIGURED' });
  if (!rateLimit(req, 'checkout', 10, 10 * 60 * 1000)) {
    return send(res, 429, { error: 'Too many attempts, try again later', code: 'RATE_LIMITED' });
  }

  const body = await readJson(req);
  const lines = priceItems(body.items);
  const customer = validateCustomer(body);
  const t = totals(lines, customer.method);
  const base = siteUrl(req);
  const orderId = newOrderNo();
  let userId = null;
  if (dbm.configured()) {
    const who = await optionalUser(req).catch(() => null);
    if (who) { userId = who.userId; await ensureUser(userId, { email: customer.email, name: customer.name }); }
  }

  const form = new URLSearchParams();
  form.set('mode', 'payment');
  form.set('success_url', `${base}/?payment=success`);
  form.set('cancel_url', `${base}/?payment=cancelled#shop`);
  form.set('customer_email', customer.email);
  form.set('locale', LOCALES[clean(body.lang, 4)] || 'lv');
  form.set('payment_method_types[0]', 'card');
  form.set('metadata[order_id]', orderId);
  form.set('metadata[customer_name]', customer.name);
  form.set('metadata[delivery_method]', customer.method);
  form.set('metadata[delivery_destination]', customer.destination.slice(0, 480));
  form.set('metadata[items]', lines.map((l) => `${l.id}${l.variant ? '|' + l.variant : ''} x${l.quantity}`).join('; ').slice(0, 480));

  lines.forEach((l, i) => {
    form.set(`line_items[${i}][quantity]`, String(l.quantity));
    form.set(`line_items[${i}][price_data][currency]`, 'eur');
    form.set(`line_items[${i}][price_data][unit_amount]`, String(l.cents));
    form.set(`line_items[${i}][price_data][product_data][name]`, l.name.slice(0, 250));
  });
  const n = lines.length;
  form.set(`line_items[${n}][quantity]`, '1');
  form.set(`line_items[${n}][price_data][currency]`, 'eur');
  form.set(`line_items[${n}][price_data][unit_amount]`, String(t.shipping));
  form.set(`line_items[${n}][price_data][product_data][name]`, customer.method === 'omniva' ? 'Omniva pakomāts' : 'Kurjers');

  const r = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
    signal: AbortSignal.timeout(10000),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok || !data.url) {
    console.error('[stripe]', r.status, data?.error?.message);
    return send(res, 502, { error: 'Could not create payment session', code: 'STRIPE_ERROR' });
  }
  await saveOrder({ id: orderId, userId, customer, lines, totals: t, paymentMethod: 'stripe', status: 'pending_payment', sessionId: data.id });
  return send(res, 200, { url: data.url, orderNo: orderId });
});
