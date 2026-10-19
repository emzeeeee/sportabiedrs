'use strict';
/* Run with: npm run test:api  (Node's built-in test runner, no extra deps) */
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const server = require('../scripts/serve');

let base;
let stripeCalls;
const realFetch = global.fetch;

before(async () => {
  process.env.NODE_ENV = 'test';
  process.env.STRIPE_SECRET_KEY = 'sk_test_dummy';
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test';
  process.env.RESEND_API_KEY = 're_dummy';
  process.env.EMAIL_FROM = 'shop@example.com';
  process.env.CONTACT_TO = 'owner@example.com';
  process.env.SITE_URL = 'https://example.test';
  await new Promise((r) => server.listen(0, r));
  base = `http://127.0.0.1:${server.address().port}`;
  stripeCalls = [];
  // Stub outbound services; local calls pass through.
  global.fetch = async (url, opts) => {
    if (String(url).startsWith('https://api.stripe.com')) {
      stripeCalls.push(new URLSearchParams(String(opts.body)));
      return new Response(JSON.stringify({ url: 'https://checkout.stripe.com/c/pay/test' }), { status: 200 });
    }
    if (String(url).startsWith('https://api.resend.com')) return new Response('{"id":"x"}', { status: 200 });
    return realFetch(url, opts);
  };
});
after(() => { global.fetch = realFetch; server.close(); });

const post = (p, body, headers = {}) => realFetch(base + p, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
const cust = { name: 'Jānis Bērziņš', email: 'janis@example.com' };
const del = { method: 'omniva', destination: 'Rīga - Origo pakomāts' };

test('checkout ignores browser prices and uses the server catalogue', async () => {
  const r = await post('/api/create-checkout-session', {
    items: [{ id: 'wilson-pro-staff-97-v14', variant: 'G3 (4 3/8")', quantity: 1, price: 0.01 }], customer: cust, delivery: del, lang: 'lv',
  });
  assert.equal(r.status, 200);
  assert.match((await r.json()).url, /^https:\/\/checkout\.stripe\.com\//);
  const f = stripeCalls.at(-1);
  assert.equal(f.get('line_items[0][price_data][unit_amount]'), '27200');
  assert.equal(f.get('line_items[1][price_data][unit_amount]'), '299'); // Omniva shipping
  assert.equal(f.get('success_url'), 'https://example.test/?payment=success');
});

test('checkout rejects unknown products, bad variants and bad quantities', async () => {
  for (const item of [
    { id: 'nope', quantity: 1 },
    { id: 'wilson-pro-staff-97-v14', variant: 'G9', quantity: 1 },
    { id: 'wilson-pro-staff-97-v14', quantity: 1 },
    { id: 'venum-challenger-30-gloves', variant: '10 oz', quantity: 0 },
    { id: 'venum-challenger-30-gloves', variant: '10 oz', quantity: 1.5 },
    { id: 'venum-challenger-30-gloves', variant: '10 oz', quantity: 999 },
  ]) {
    const r = await post('/api/create-checkout-session', { items: [item], customer: cust, delivery: del });
    assert.equal(r.status, 400, JSON.stringify(item));
  }
});

test('checkout validates customer and delivery', async () => {
  const items = [{ id: 'venum-challenger-30-gloves', variant: '10 oz', quantity: 1 }];
  for (const [customer, delivery] of [
    [{ name: 'A', email: 'a@b.co' }, del],
    [{ name: 'Valid Name', email: 'not-an-email' }, del],
    [cust, { method: 'teleport', destination: 'Rīga' }],
    [cust, { method: 'courier', destination: '' }],
  ]) assert.equal((await post('/api/create-checkout-session', { items, customer, delivery })).status, 400);
});

test('cross-origin POSTs are refused', async () => {
  const r = await post('/api/create-checkout-session', { items: [] }, { Origin: 'https://evil.example' });
  assert.equal(r.status, 403);
});

test('cash order returns a server order number', async () => {
  const r = await post('/api/create-order', { items: [{ id: 'venum-challenger-30-gloves', variant: '12 oz', quantity: 2 }], customer: cust, delivery: { method: 'courier', destination: 'Brīvības iela 1, Rīga' } });
  assert.equal(r.status, 200);
  const j = await r.json();
  assert.match(j.orderNo, /^SB-\d{6}$/);
  assert.equal(j.total, 5490 * 2 + 499);
});

test('omniva-locations serves the bundled lockers', async () => {
  const r = await realFetch(base + '/api/omniva-locations');
  const j = await r.json();
  assert.ok(Object.keys(j.cities).length > 100);
});

test('contact: honeypot, validation, success', async () => {
  assert.equal((await post('/api/contact', { type: 'newsletter', email: 'bad' })).status, 400);
  assert.equal((await post('/api/contact', { type: 'newsletter', email: 'a@b.co' })).status, 200);
  assert.equal((await post('/api/contact', { type: 'contact', email: 'a@b.co', name: 'Ann', message: 'Hello there' })).status, 200);
  assert.equal((await post('/api/contact', { type: 'contact', email: 'a@b.co', name: 'A', message: '' })).status, 400);
});

test('stripe webhook verifies signatures', async () => {
  const payload = JSON.stringify({ type: 'checkout.session.completed', data: { object: { id: 'cs_1', payment_status: 'paid', amount_total: 1000, metadata: {} } } });
  const t = Math.floor(Date.now() / 1000);
  const sig = crypto.createHmac('sha256', 'whsec_test').update(`${t}.${payload}`).digest('hex');
  const ok = await realFetch(base + '/api/stripe-webhook', { method: 'POST', headers: { 'stripe-signature': `t=${t},v1=${sig}` }, body: payload });
  assert.equal(ok.status, 200);
  const bad = await realFetch(base + '/api/stripe-webhook', { method: 'POST', headers: { 'stripe-signature': `t=${t},v1=${'0'.repeat(64)}` }, body: payload });
  assert.equal(bad.status, 400);
  const stale = await realFetch(base + '/api/stripe-webhook', { method: 'POST', headers: { 'stripe-signature': `t=${t - 4000},v1=${sig}` }, body: payload });
  assert.equal(stale.status, 400);
});

test('ai-chat answers 503 without a key so the frontend falls back', async () => {
  const r = await post('/api/ai-chat', { message: 'hi', lang: 'lv' });
  assert.equal(r.status, 503);
});

test('static pages and clean URLs work', async () => {
  assert.equal((await realFetch(base + '/')).status, 200);
  assert.equal((await realFetch(base + '/about')).status, 200);
  assert.equal((await realFetch(base + '/nope')).status, 404);
  for (const p of ['/.env', '/scripts/serve.js', '/api/_lib/catalog.json', '/env.example', '/package-lock.json']) assert.equal((await realFetch(base + p)).status, 404, p);
});

test('every self-hosted font referenced in tokens.css exists and is served', async () => {
  const css = require('node:fs').readFileSync(require('node:path').join(__dirname, '../tokens.css'), 'utf8');
  const files = [...new Set([...css.matchAll(/url\('(assets\/fonts\/[^']+\.woff2)'\)/g)].map((m) => m[1]))];
  assert.ok(files.length >= 9, 'expected the font files to be referenced');
  for (const f of files) {
    const r = await realFetch(`${base}/${f}`);
    assert.equal(r.status, 200, f);
    assert.ok((await r.arrayBuffer()).byteLength > 5000, `${f} looks empty`);
  }
});

test('new pages are served and the dev server still hides private files', async () => {
  const http = require('node:http');
  const get = (p) => new Promise((res) => http.get(base + p, (r) => { r.resume(); res(r.statusCode); }));
  assert.equal(await get('/account.html'), 200);
  assert.equal(await get('/club-register.html'), 200);
  assert.equal(await get('/api/_lib/db.js'), 404);
});
