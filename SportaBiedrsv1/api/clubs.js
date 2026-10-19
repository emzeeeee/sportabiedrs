'use strict';
/* /api/clubs
 *  GET  -> clubs that registered through the site and were approved (with map coordinates),
 *          so the map can show clubs that are not in the national register data.
 *  POST -> a club/venue applies to be listed. Stored as "pending" and emailed to you;
 *          nothing goes live until you approve it via /api/admin. */

const crypto = require('crypto');
const { send, readJson, rateLimit, isEmail, clean, escHtml, handler } = require('./_lib/http');
const db = require('./_lib/db');
const { sendMail, ownerAddress } = require('./_lib/mail');

const SPORTS = ['padel', 'tennis', 'basketball', 'football', 'volleyball', 'hockey', 'fitness', 'swimming', 'running', 'cycling', 'discgolf', 'golf', 'boxing', 'extreme', 'climbing', 'badminton', 'tabletennis', 'other'];

module.exports = handler(['GET', 'POST'], async (req, res) => {
  if (req.method === 'GET') {
    if (!db.configured()) return send(res, 200, [], { 'Cache-Control': 'public, s-maxage=60' });
    const rows = await db.query(
      `SELECT v.id, v.name, v.sport_key, v.city, v.address, v.lat, v.lng, v.website
       FROM venues v JOIN club_applications a ON a.venue_id = v.id AND a.status = 'approved'
       WHERE v.active AND v.lat IS NOT NULL AND v.lng IS NOT NULL ORDER BY v.name`,
    );
    return send(res, 200, rows.map((r) => ({ id: r.id, name: r.name, sportKey: r.sport_key, city: r.city, address: r.address, lat: r.lat, lng: r.lng, website: r.website })),
      { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' });
  }

  if (!db.configured()) throw db.notConfigured();
  if (!rateLimit(req, 'club-apply', 3, 60 * 60_000)) return send(res, 429, { error: 'Too many applications, try again later', code: 'RATE_LIMITED' });
  const b = await readJson(req);
  if (b.website_url) return send(res, 200, { ok: true }); // honeypot
  const app = {
    name: clean(b.name, 120), contact: clean(b.contact_name, 120), email: clean(b.email, 254).toLowerCase(),
    phone: clean(b.phone, 40), city: clean(b.city, 80), address: clean(b.address, 200),
    sport: clean(b.sport_key, 30).toLowerCase(), website: clean(b.website, 300), message: clean(b.message, 2000),
  };
  const bad = (m, c) => send(res, 400, { error: m, code: c });
  if (app.name.length < 2) return bad('Club name is required', 'BAD_NAME');
  if (app.contact.length < 2) return bad('Contact name is required', 'BAD_CONTACT');
  if (!isEmail(app.email)) return bad('Valid email is required', 'BAD_EMAIL');
  if (app.city.length < 2 || app.address.length < 4) return bad('City and address are required', 'BAD_ADDRESS');
  if (!SPORTS.includes(app.sport)) return bad('Choose a sport', 'BAD_SPORT');
  if (app.website && !/^https?:\/\/[^\s]+$/i.test(app.website)) return bad('Website must start with http(s)://', 'BAD_WEBSITE');

  const id = 'app_' + crypto.randomBytes(8).toString('hex');
  await db.query(
    `INSERT INTO club_applications (id, name, contact_name, email, phone, city, address, sport_key, website, message)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
    [id, app.name, app.contact, app.email, app.phone || null, app.city, app.address, app.sport, app.website || null, app.message || null],
  );
  const owner = ownerAddress();
  if (owner) {
    await sendMail({
      to: owner, replyTo: app.email, subject: `Jauns kluba pieteikums: ${app.name} (${app.city})`,
      html: `<h3>${escHtml(app.name)}</h3><p>${escHtml(app.sport)} · ${escHtml(app.city)}, ${escHtml(app.address)}</p><p>${escHtml(app.contact)} · ${escHtml(app.email)} · ${escHtml(app.phone)}</p><p>${escHtml(app.website)}</p><p>${escHtml(app.message)}</p><p>Pieteikuma ID: ${escHtml(id)}</p>`,
    }).catch((e) => console.error('[mail]', e.message));
  }
  return send(res, 200, { ok: true, id });
});
