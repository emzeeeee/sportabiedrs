'use strict';
/* Bookings, accounts, orders and clubs against a real (in-memory) Postgres. */
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { SignJWT, generateKeyPair, exportJWK } = require('jose');

const realFetch = global.fetch;
let server, base, db, keys, stripeLog;
const ADMIN = 'test-admin-token-123456';

async function token(sub) {
  return new SignJWT({ azp: 'https://example.test' }).setProtectedHeader({ alg: 'RS256', kid: 'k1' }).setSubject(sub).setIssuedAt().setExpirationTime('10m').sign(keys.privateKey);
}
const call = async (method, path, { body, as, headers = {} } = {}) => {
  const h = { 'Content-Type': 'application/json', ...headers };
  if (as) h.Authorization = `Bearer ${await token(as)}`;
  const r = await realFetch(base + path, { method, headers: h, body: body ? JSON.stringify(body) : undefined });
  let json = null; try { json = await r.json(); } catch { /* empty */ }
  return { status: r.status, json };
};
const admin = (body) => call('POST', '/api/admin', { body, headers: { 'x-admin-token': ADMIN } });
const rigaDate = (daysAhead) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Riga' }).format(new Date(Date.now() + daysAhead * 86400_000));
const slotIso = (date, hh) => require('../api/_lib/time').zonedToUtc(date, hh, 0, 'Europe/Riga');
const checkout = (as, courtId, date, hh, extra = {}) => call('POST', '/api/bookings/checkout', {
  as, headers: extra.headers || {},
  body: { court_id: courtId, start_time: slotIso(date, hh).toISOString(), end_time: slotIso(date, hh + 1).toISOString(), user: { email: `${as}@example.com`, name: as }, ...extra.body },
});
function webhook(event) {
  const payload = JSON.stringify(event);
  const t = Math.floor(Date.now() / 1000);
  const sig = crypto.createHmac('sha256', 'whsec_test').update(`${t}.${payload}`).digest('hex');
  return realFetch(base + '/api/stripe-webhook', { method: 'POST', headers: { 'stripe-signature': `t=${t},v1=${sig}` }, body: payload });
}
let piCounter = 0;

before(async () => {
  const { PGlite } = await import('@electric-sql/pglite');
  db = new PGlite();
  global.__TEST_DB__ = db;
  keys = await generateKeyPair('RS256');
  const jwk = { ...(await exportJWK(keys.publicKey)), kid: 'k1', alg: 'RS256', use: 'sig' };
  Object.assign(process.env, {
    NODE_ENV: 'test', CLERK_JWKS_JSON: JSON.stringify({ keys: [jwk] }), ADMIN_TOKEN: ADMIN, STRIPE_SECRET_KEY: 'sk_test_x', STRIPE_WEBHOOK_SECRET: 'whsec_test',
    RESEND_API_KEY: 're_x', EMAIL_FROM: 'a@b.co', CONTACT_TO: 'owner@example.com', SITE_URL: 'https://example.test',
  });
  stripeLog = [];
  global.fetch = async (url, opts = {}) => {
    const u = String(url);
    if (u.startsWith('https://api.stripe.com')) {
      const body = opts.body ? Object.fromEntries(new URLSearchParams(String(opts.body))) : {};
      const path = u.replace('https://api.stripe.com/v1', '');
      stripeLog.push({ method: opts.method || 'GET', path, body });
      if (path === '/payment_intents' && opts.method === 'POST') { piCounter += 1; return new Response(JSON.stringify({ id: `pi_${piCounter}`, client_secret: `pi_${piCounter}_secret` })); }
      if (path.startsWith('/payment_intents/') && !path.endsWith('/cancel')) return new Response(JSON.stringify({ id: path.split('/')[2], client_secret: `${path.split('/')[2]}_secret` }));
      if (path === '/refunds') return new Response(JSON.stringify({ id: 're_1' }));
      return new Response(JSON.stringify({ id: 'x', url: 'https://checkout.stripe.com/c/pay/x' }));
    }
    if (u.startsWith('https://api.resend.com')) return new Response('{"id":"m"}');
    return realFetch(url, opts);
  };
  server = require('../scripts/serve');
  await new Promise((r) => server.listen(0, r));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => { global.fetch = realFetch; server.close(); delete global.__TEST_DB__; });

let court1, court2a, court2b;

test('admin endpoints reject missing or wrong token', async () => {
  assert.equal((await call('GET', '/api/admin?view=venues')).status, 403);
  assert.equal((await call('GET', '/api/admin?view=venues', { headers: { 'x-admin-token': 'nope' } })).status, 403);
});

test('nothing is bookable until an admin adds courts', async () => {
  assert.deepEqual((await call('GET', '/api/venues')).json, []);
  const v = await admin({ action: 'upsert_venue', venue: { name: 'Test Padel Club', sport_key: 'padel', city: 'Rīga', address: 'Brīvības 1' }, courts: [{ name: 'Court 1', price_eur: 20 }] });
  assert.equal(v.status, 200);
  const w = await admin({ action: 'upsert_venue', venue: { name: 'Twin Courts', sport_key: 'tennis', city: 'Rīga', address: 'Elizabetes 2', contact_email: 'club@example.com' }, courts: [{ name: 'A', price_eur: 15 }, { name: 'B', price_eur: 15 }] });
  await admin({ action: 'upsert_venue', venue: { name: 'Listed But Not Bookable', sport_key: 'golf' }, courts: [] });
  const list = (await call('GET', '/api/venues')).json;
  assert.equal(list.length, 2, 'venue without courts must not be returned');
  court1 = list.find((x) => x.name === 'Test Padel Club').courts[0].id;
  const twin = list.find((x) => x.name === 'Twin Courts');
  [court2a, court2b] = twin.courts.map((c) => c.id);
  assert.equal(list.find((x) => x.name === 'Test Padel Club').courts[0].priceCents, 2000);
  assert.ok(w.json.venueId);
});

test('slots: hourly grid 08-22 in venue time, past times unavailable', async () => {
  const venues = (await call('GET', '/api/venues')).json;
  const id = venues.find((v) => v.name === 'Test Padel Club').id;
  const future = (await call('GET', `/api/venues/${id}/slots?date=${rigaDate(3)}`)).json;
  assert.equal(future.length, 14);
  assert.equal(future[0].start, '08:00'); assert.equal(future.at(-1).end, '22:00');
  assert.ok(future.every((s) => s.available && s.courtId === court1));
  const past = (await call('GET', `/api/venues/${id}/slots?date=${rigaDate(-2)}`)).json;
  assert.ok(past.every((s) => !s.available));
  assert.equal((await call('GET', `/api/venues/${id}/slots?date=garbage`)).status, 400);
  assert.equal((await call('GET', `/api/venues/nope/slots?date=${rigaDate(3)}`)).status, 404);
});

test('checkout requires login and uses the server price', async () => {
  const date = rigaDate(3);
  assert.equal((await call('POST', '/api/bookings/checkout', { body: { court_id: court1 } })).status, 401);
  const r = await checkout('alice', court1, date, 10, { body: { amount: 1, price: 1, price_cents: 1 } });
  assert.equal(r.status, 200);
  assert.match(r.json.clientSecret, /_secret$/);
  const pi = stripeLog.filter((l) => l.path === '/payment_intents' && l.method === 'POST').at(-1);
  assert.equal(pi.body.amount, '2000');
  assert.equal(pi.body['metadata[booking_id]'], r.json.bookingId);
});

test('double booking is impossible while a hold exists; second court is offered', async () => {
  const date = rigaDate(3);
  const taken = await checkout('bob', court1, date, 10);
  assert.equal(taken.status, 409); assert.equal(taken.json.code, 'SLOT_TAKEN');
  const id = (await call('GET', '/api/venues')).json.find((v) => v.name === 'Test Padel Club').id;
  const slots = (await call('GET', `/api/venues/${id}/slots?date=${date}`)).json;
  assert.equal(slots.find((s) => s.start === '10:00').available, false);
  assert.equal(slots.find((s) => s.start === '11:00').available, true);
  // two-court venue: after court A is taken the slot is still bookable on court B
  assert.equal((await checkout('alice', court2a, date, 12)).status, 200);
  const twinId = (await call('GET', '/api/venues')).json.find((v) => v.name === 'Twin Courts').id;
  const twin = (await call('GET', `/api/venues/${twinId}/slots?date=${date}`)).json.find((s) => s.start === '12:00');
  assert.equal(twin.available, true); assert.equal(twin.courtId, court2b);
});

test('concurrent requests for one slot: exactly one wins', async () => {
  const date = rigaDate(4);
  const results = await Promise.all(['u1', 'u2', 'u3', 'u4', 'u5'].map((u) => checkout(u, court1, date, 15)));
  assert.equal(results.filter((r) => r.status === 200).length, 1);
  assert.equal(results.filter((r) => r.status === 409).length, 4);
});

test('validation: wrong length, outside hours, off-grid, past', async () => {
  const date = rigaDate(5);
  const bad = (start, end) => call('POST', '/api/bookings/checkout', { as: 'carol', body: { court_id: court1, start_time: start.toISOString(), end_time: end.toISOString(), user: { email: 'c@example.com' } } });
  assert.equal((await bad(slotIso(date, 10), slotIso(date, 12))).status, 400);
  assert.equal((await bad(slotIso(date, 6), slotIso(date, 7))).status, 400);
  assert.equal((await bad(slotIso(date, 22), slotIso(date, 23))).status, 400);
  assert.equal((await bad(new Date(slotIso(date, 10).getTime() + 30 * 60000), new Date(slotIso(date, 11).getTime() + 30 * 60000))).status, 400);
  assert.equal((await bad(slotIso(rigaDate(-1), 10), slotIso(rigaDate(-1), 11))).status, 400);
  assert.equal((await call('POST', '/api/bookings/checkout', { as: 'carol', body: { court_id: 'nope', start_time: slotIso(date, 10).toISOString(), end_time: slotIso(date, 11).toISOString(), user: { email: 'c@example.com' } } })).status, 404);
});

test('idempotency key returns the same booking and payment', async () => {
  const date = rigaDate(6);
  const h = { 'Idempotency-Key': 'key-abc-123' };
  const a = await checkout('dave', court1, date, 9, { headers: h });
  const b = await checkout('dave', court1, date, 9, { headers: h });
  assert.equal(a.status, 200); assert.equal(b.status, 200);
  assert.equal(a.json.bookingId, b.json.bookingId);
  // same key but a different slot must NOT hand back the old booking
  const c = await checkout('dave', court1, date, 11, { headers: h });
  assert.equal(c.status, 200); assert.notEqual(c.json.bookingId, a.json.bookingId);
});

test('payment webhook confirms the booking; my bookings lists it; wrong user cannot cancel', async () => {
  const date = rigaDate(7);
  const r = await checkout('erin', court1, date, 18);
  const piId = (await db.query('SELECT payment_intent_id FROM bookings WHERE id = $1', [r.json.bookingId])).rows[0].payment_intent_id;
  const ev = { type: 'payment_intent.succeeded', data: { object: { id: piId, metadata: { booking_id: r.json.bookingId } } } };
  assert.equal((await webhook(ev)).status, 200);
  assert.equal((await webhook(ev)).status, 200); // Stripe retries are harmless
  const mine = (await call('GET', '/api/bookings', { as: 'erin' })).json;
  const b = mine.find((x) => x.id === r.json.bookingId);
  assert.equal(b.status, 'confirmed'); assert.equal(b.localStart, '18:00'); assert.equal(b.canCancel, true);
  assert.equal((await call('GET', '/api/bookings', { as: 'frank' })).json.length, 0);
  assert.equal((await call('POST', '/api/bookings/cancel', { as: 'frank', body: { id: r.json.bookingId } })).status, 404);
  const me = (await call('GET', '/api/me', { as: 'erin' })).json;
  assert.equal(me.bookings, 1); assert.equal(me.email, 'erin@example.com');
});

test('cancel > 24h before start refunds in full and frees the slot', async () => {
  const date = rigaDate(8);
  const r = await checkout('gina', court1, date, 19);
  const piId = (await db.query('SELECT payment_intent_id FROM bookings WHERE id = $1', [r.json.bookingId])).rows[0].payment_intent_id;
  await webhook({ type: 'payment_intent.succeeded', data: { object: { id: piId, metadata: { booking_id: r.json.bookingId } } } });
  const c = await call('POST', '/api/bookings/cancel', { as: 'gina', body: { id: r.json.bookingId } });
  assert.equal(c.json.status, 'refunded');
  assert.ok(stripeLog.some((l) => l.path === '/refunds' && l.body.payment_intent === piId));
  assert.equal((await checkout('hank', court1, date, 19)).status, 200);
});

test('cancel inside 24h is refused', async () => {
  await db.query(`INSERT INTO users (id, email) VALUES ('ivy','i@example.com') ON CONFLICT DO NOTHING`);
  const start = new Date(Date.now() + 5 * 3600_000);
  await db.query(`INSERT INTO bookings (id, court_id, user_id, start_at, end_at, status, amount_cents) VALUES ('bk_soon',$1,'ivy',$2,$3,'confirmed',2000)`, [court1, start.toISOString(), new Date(start.getTime() + 3600_000).toISOString()]);
  const c = await call('POST', '/api/bookings/cancel', { as: 'ivy', body: { id: 'bk_soon' } });
  assert.equal(c.status, 409); assert.equal(c.json.code, 'TOO_LATE_TO_CANCEL');
});

test('an expired hold frees the slot', async () => {
  const date = rigaDate(9);
  const a = await checkout('jack', court1, date, 8);
  assert.equal((await checkout('kim', court1, date, 8)).status, 409);
  await db.query(`UPDATE bookings SET expires_at = now() - interval '1 minute' WHERE id = $1`, [a.json.bookingId]);
  assert.equal((await checkout('kim', court1, date, 8)).status, 200);
});

test('paid after the hold lapsed AND the slot was re-sold: auto refund, no double booking', async () => {
  const date = rigaDate(10);
  const a = await checkout('liam', court1, date, 14);
  const piA = (await db.query('SELECT payment_intent_id FROM bookings WHERE id = $1', [a.json.bookingId])).rows[0].payment_intent_id;
  await db.query(`UPDATE bookings SET expires_at = now() - interval '1 minute' WHERE id = $1`, [a.json.bookingId]);
  const b = await checkout('mia', court1, date, 14);
  const piB = (await db.query('SELECT payment_intent_id FROM bookings WHERE id = $1', [b.json.bookingId])).rows[0].payment_intent_id;
  await webhook({ type: 'payment_intent.succeeded', data: { object: { id: piB, metadata: { booking_id: b.json.bookingId } } } });
  const before = stripeLog.length;
  assert.equal((await webhook({ type: 'payment_intent.succeeded', data: { object: { id: piA, metadata: { booking_id: a.json.bookingId } } } })).status, 200);
  assert.ok(stripeLog.slice(before).some((l) => l.path === '/refunds' && l.body.payment_intent === piA));
  const rows = (await db.query(`SELECT id, status FROM bookings WHERE id IN ($1,$2) ORDER BY id`, [a.json.bookingId, b.json.bookingId])).rows;
  assert.equal(rows.find((r) => r.id === a.json.bookingId).status, 'refunded');
  assert.equal(rows.find((r) => r.id === b.json.bookingId).status, 'confirmed');
});

test('paid after the hold lapsed but slot still free: booking is revived', async () => {
  const date = rigaDate(11);
  const a = await checkout('nina', court1, date, 16);
  const pi = (await db.query('SELECT payment_intent_id FROM bookings WHERE id = $1', [a.json.bookingId])).rows[0].payment_intent_id;
  await db.query(`UPDATE bookings SET status = 'expired', expires_at = now() - interval '1 minute' WHERE id = $1`, [a.json.bookingId]);
  await webhook({ type: 'payment_intent.succeeded', data: { object: { id: pi, metadata: { booking_id: a.json.bookingId } } } });
  assert.equal((await db.query('SELECT status FROM bookings WHERE id = $1', [a.json.bookingId])).rows[0].status, 'confirmed');
});

test('club registration: validate, store pending, approve with courts, appears on map and is bookable', async () => {
  assert.equal((await call('POST', '/api/clubs', { body: { name: 'X' } })).status, 400);
  const ok = await call('POST', '/api/clubs', { body: { name: 'Jūrmalas Tenisa Klubs', contact_name: 'Anna', email: 'anna@club.lv', city: 'Jūrmala', address: 'Jomas iela 5', sport_key: 'tennis', message: 'Hi' } });
  assert.equal(ok.status, 200);
  assert.equal((await call('POST', '/api/clubs', { body: { name: 'Bot', website_url: 'http://spam', contact_name: 'b', email: 'b@b.co' } })).status, 200); // honeypot silently ignored
  assert.deepEqual((await call('GET', '/api/clubs')).json, [], 'pending clubs are not public');
  const apps = (await call('GET', '/api/admin?view=applications', { headers: { 'x-admin-token': ADMIN } })).json;
  assert.equal(apps.length, 1);
  const rev = await admin({ action: 'review_application', id: ok.json.id, decision: 'approve', lat: 56.97, lng: 23.78, courts: [{ name: 'Korts 1', price_eur: 18 }] });
  assert.equal(rev.status, 200);
  assert.equal((await admin({ action: 'review_application', id: ok.json.id, decision: 'reject' })).status, 409);
  const clubs = (await call('GET', '/api/clubs')).json;
  assert.equal(clubs.length, 1); assert.equal(clubs[0].name, 'Jūrmalas Tenisa Klubs'); assert.equal(clubs[0].lat, 56.97);
  assert.ok((await call('GET', '/api/venues')).json.some((v) => v.name === 'Jūrmalas Tenisa Klubs'));
});

test('shop orders are stored per account; unpaid Stripe orders stay hidden until paid', async () => {
  const items = [{ id: 'venum-challenger-30-gloves', variant: '12 oz', quantity: 1 }];
  const customer = { name: 'Olga Test', email: 'olga@example.com' };
  const cash = await call('POST', '/api/create-order', { as: 'olga', body: { items, customer, delivery: { method: 'courier', destination: 'Brīvības iela 1, Rīga' } } });
  assert.equal(cash.status, 200);
  const sess = await call('POST', '/api/create-checkout-session', { as: 'olga', body: { items, customer, delivery: { method: 'omniva', destination: 'Rīga - Origo pakomāts' } } });
  assert.equal(sess.status, 200);
  let mine = (await call('GET', '/api/orders', { as: 'olga' })).json;
  assert.equal(mine.length, 1); assert.equal(mine[0].id, cash.json.orderNo); assert.equal(mine[0].totalCents, 5490 + 499);
  assert.equal(mine[0].items[0].name.includes('Venum'), true);
  const done = { type: 'checkout.session.completed', data: { object: { id: 'cs_1', payment_status: 'paid', amount_total: 5789, metadata: { order_id: sess.json.orderNo, items: 'x' } } } };
  assert.equal((await webhook(done)).status, 200);
  mine = (await call('GET', '/api/orders', { as: 'olga' })).json;
  assert.equal(mine.length, 2);
  assert.equal(mine.find((o) => o.id === sess.json.orderNo).status, 'paid');
  assert.equal((await call('GET', '/api/orders', { as: 'someone-else' })).json.length, 0);
});

test('a tampered or expired login token is rejected', async () => {
  const good = await token('zed');
  const tampered = good.slice(0, -4) + (good.endsWith('AAAA') ? 'BBBB' : 'AAAA');
  const r = await realFetch(base + '/api/me', { headers: { Authorization: `Bearer ${tampered}` } });
  assert.equal(r.status, 401);
  const expired = await new SignJWT({}).setProtectedHeader({ alg: 'RS256', kid: 'k1' }).setSubject('zed').setExpirationTime(Math.floor(Date.now() / 1000) - 60).sign(keys.privateKey);
  assert.equal((await realFetch(base + '/api/me', { headers: { Authorization: `Bearer ${expired}` } })).status, 401);
});
