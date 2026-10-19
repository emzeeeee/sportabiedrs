'use strict';
/* Clerk login verification.
 * The browser sends  Authorization: Bearer <clerk session token>.
 * We verify its signature with Clerk's public keys (JWKS) so nobody can
 * pretend to be another user. Keys are fetched from Clerk's backend API with
 * CLERK_SECRET_KEY (cached for an hour) or can be supplied as JSON in
 * CLERK_JWKS_JSON (also used by the tests). */

const { jwtVerify, createLocalJWKSet } = require('jose');
const db = require('./db');
const { clean } = require('./http');

let jwksCache = null; // { at, set }

async function getKeySet() {
  if (process.env.CLERK_JWKS_JSON) return createLocalJWKSet(JSON.parse(process.env.CLERK_JWKS_JSON));
  const secret = process.env.CLERK_SECRET_KEY;
  if (!secret) throw Object.assign(new Error('Login is not configured'), { status: 503, code: 'AUTH_NOT_CONFIGURED' });
  if (jwksCache && Date.now() - jwksCache.at < 3600_000) return jwksCache.set;
  const r = await fetch('https://api.clerk.com/v1/jwks', {
    headers: { Authorization: `Bearer ${secret}` },
    signal: AbortSignal.timeout(8000),
  });
  if (!r.ok) throw new Error(`Clerk JWKS ${r.status}`);
  const set = createLocalJWKSet(await r.json());
  jwksCache = { at: Date.now(), set };
  return set;
}

function unauthorized(message = 'Sign in required') {
  return Object.assign(new Error(message), { status: 401, code: 'AUTH_REQUIRED' });
}

/** Returns { userId } or throws 401. Does not touch the database. */
async function verifyRequest(req) {
  const header = String(req.headers.authorization || '');
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token) throw unauthorized();
  let payload;
  try {
    ({ payload } = await jwtVerify(token, await getKeySet(), { clockTolerance: 5 }));
  } catch (e) {
    if (e.status) throw e;
    if (/^Clerk JWKS/.test(e.message)) throw e;
    throw unauthorized('Session expired, sign in again');
  }
  const allowed = (process.env.CLERK_AUTHORIZED_PARTIES || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (allowed.length && payload.azp && !allowed.includes(payload.azp)) throw unauthorized('Wrong origin');
  if (!payload.sub) throw unauthorized();
  return { userId: String(payload.sub), claims: payload };
}

async function ensureUser(userId, hint = {}) {
  const email = clean(hint.email, 254).toLowerCase() || null;
  const name = clean(hint.name, 120) || null;
  await db.query(
    `INSERT INTO users (id, email, name) VALUES ($1, $2, $3)
     ON CONFLICT (id) DO UPDATE SET
       email = COALESCE(EXCLUDED.email, users.email),
       name = COALESCE(EXCLUDED.name, users.name),
       last_seen = now()`,
    [userId, email, name],
  );
}

/** Verifies the login and makes sure a users row exists (created on first use). */
async function requireUser(req, hint = {}) {
  const { userId } = await verifyRequest(req);
  await ensureUser(userId, hint);
  return { userId };
}

/** Like verifyRequest but returns null instead of throwing when not signed in. */
async function optionalUser(req) {
  if (!req.headers.authorization) return null;
  try {
    return await verifyRequest(req);
  } catch (e) {
    if (e.status === 401) return null;
    throw e;
  }
}

/** Admin endpoints: constant-time check of the ADMIN_TOKEN header. */
function requireAdmin(req) {
  const expected = process.env.ADMIN_TOKEN || '';
  const given = String(req.headers['x-admin-token'] || '');
  const crypto = require('crypto');
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (!expected || expected.length < 16 || a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    throw Object.assign(new Error('Forbidden'), { status: 403, code: 'FORBIDDEN' });
  }
}

module.exports = { verifyRequest, requireUser, ensureUser, optionalUser, requireAdmin };
