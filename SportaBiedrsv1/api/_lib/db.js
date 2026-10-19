'use strict';
/* Postgres access. Works with any Postgres (Neon / Supabase / Vercel Postgres):
 * set DATABASE_URL (or POSTGRES_URL). If neither is set, configured() is false
 * and every feature that needs storage degrades to the old behaviour.
 * The schema is created automatically (CREATE TABLE IF NOT EXISTS), so there
 * is no manual migration step. */

const SCHEMA = require('./schema');

let pool = null;
let schemaReady = null;

function connectionString() {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL || '';
}

function configured() {
  return Boolean(global.__TEST_DB__ || connectionString());
}

function getPool() {
  if (global.__TEST_DB__) return global.__TEST_DB__; // tests inject PGlite (same query() shape)
  if (!pool) {
    const { Pool } = require('pg');
    pool = new Pool({
      connectionString: connectionString(),
      max: 3, // serverless: keep the connection count small
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 8_000,
    });
    pool.on('error', (e) => console.error('[db] idle client error', e.message));
  }
  return pool;
}

async function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const p = getPool();
      for (const stmt of SCHEMA) await p.query(stmt);
    })().catch((e) => {
      schemaReady = null; // retry on next request
      throw e;
    });
  }
  return schemaReady;
}

/** query(text, params) -> rows[] */
async function query(text, params = []) {
  await ensureSchema();
  const r = await getPool().query(text, params);
  return r.rows;
}

/** Runs fn(client) inside a transaction; client.query(text, params) -> { rows }. */
async function tx(fn) {
  await ensureSchema();
  const p = getPool();
  const isPglite = Boolean(global.__TEST_DB__);
  const client = isPglite ? p : await p.connect();
  try {
    await client.query('BEGIN');
    const out = await fn(client);
    await client.query('COMMIT');
    return out;
  } catch (e) {
    try { await client.query('ROLLBACK'); } catch { /* ignore */ }
    throw e;
  } finally {
    if (!isPglite) client.release();
  }
}

function notConfigured() {
  return Object.assign(new Error('Storage is not configured'), { status: 503, code: 'DB_NOT_CONFIGURED' });
}

module.exports = { configured, query, tx, ensureSchema, notConfigured };
