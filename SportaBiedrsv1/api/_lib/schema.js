'use strict';
/* Idempotent schema. Every statement is safe to run on every cold start.
 * Money is stored in euro cents (integers). Times are timestamptz (UTC). */

module.exports = [
  `CREATE TABLE IF NOT EXISTS users (
    id          text PRIMARY KEY,            -- Clerk user id
    email       text,
    name        text,
    created_at  timestamptz NOT NULL DEFAULT now(),
    last_seen   timestamptz NOT NULL DEFAULT now()
  )`,

  // A venue is only bookable online once an admin enabled it AND gave it courts.
  `CREATE TABLE IF NOT EXISTS venues (
    id            text PRIMARY KEY,
    name          text NOT NULL,
    sport_key     text,
    city          text,
    address       text,
    timezone      text NOT NULL DEFAULT 'Europe/Riga',
    open_hour     int  NOT NULL DEFAULT 8,
    close_hour    int  NOT NULL DEFAULT 22,
    provider      text NOT NULL DEFAULT 'sportabiedrs',
    external_id   text,
    contact_email text,
    lat           double precision,
    lng           double precision,
    website       text,
    active        boolean NOT NULL DEFAULT true,
    created_at    timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS venues_name_idx ON venues (lower(name))`,

  `CREATE TABLE IF NOT EXISTS courts (
    id            text PRIMARY KEY,
    venue_id      text NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
    name          text NOT NULL,
    sport_key     text,
    price_cents   int  NOT NULL CHECK (price_cents > 0),
    slot_minutes  int  NOT NULL DEFAULT 60 CHECK (slot_minutes BETWEEN 15 AND 240),
    active        boolean NOT NULL DEFAULT true
  )`,
  `CREATE INDEX IF NOT EXISTS courts_venue_idx ON courts (venue_id)`,

  `CREATE TABLE IF NOT EXISTS bookings (
    id                text PRIMARY KEY,
    court_id          text NOT NULL REFERENCES courts(id),
    user_id           text NOT NULL REFERENCES users(id),
    start_at          timestamptz NOT NULL,
    end_at            timestamptz NOT NULL,
    status            text NOT NULL CHECK (status IN ('pending','confirmed','cancelled','expired','refunded')),
    amount_cents      int  NOT NULL,
    payment_intent_id text,
    idempotency_key   text,
    expires_at        timestamptz,
    created_at        timestamptz NOT NULL DEFAULT now(),
    CHECK (end_at > start_at)
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS bookings_idem_idx ON bookings (user_id, idempotency_key) WHERE idempotency_key IS NOT NULL`,
  `CREATE UNIQUE INDEX IF NOT EXISTS bookings_pi_idx ON bookings (payment_intent_id) WHERE payment_intent_id IS NOT NULL`,
  `CREATE INDEX IF NOT EXISTS bookings_court_time_idx ON bookings (court_id, start_at)`,
  `CREATE INDEX IF NOT EXISTS bookings_user_idx ON bookings (user_id, start_at DESC)`,

  `CREATE TABLE IF NOT EXISTS orders (
    id               text PRIMARY KEY,         -- SB-123456
    user_id          text REFERENCES users(id),
    email            text NOT NULL,
    name             text NOT NULL,
    delivery_method  text NOT NULL,
    destination      text NOT NULL,
    payment_method   text NOT NULL CHECK (payment_method IN ('cash','stripe')),
    status           text NOT NULL CHECK (status IN ('new','pending_payment','paid','cancelled')),
    subtotal_cents   int NOT NULL,
    shipping_cents   int NOT NULL,
    total_cents      int NOT NULL,
    stripe_session_id text,
    created_at       timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS orders_session_idx ON orders (stripe_session_id) WHERE stripe_session_id IS NOT NULL`,
  `CREATE INDEX IF NOT EXISTS orders_user_idx ON orders (user_id, created_at DESC)`,

  `CREATE TABLE IF NOT EXISTS order_items (
    order_id    text NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id  text NOT NULL,
    name        text NOT NULL,
    variant     text,
    unit_cents  int  NOT NULL,
    quantity    int  NOT NULL CHECK (quantity > 0)
  )`,
  `CREATE INDEX IF NOT EXISTS order_items_order_idx ON order_items (order_id)`,

  `CREATE TABLE IF NOT EXISTS club_applications (
    id             text PRIMARY KEY,
    name           text NOT NULL,
    contact_name   text NOT NULL,
    email          text NOT NULL,
    phone          text,
    city           text NOT NULL,
    address        text NOT NULL,
    sport_key      text NOT NULL,
    website        text,
    message        text,
    status         text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
    venue_id       text REFERENCES venues(id),
    created_at     timestamptz NOT NULL DEFAULT now(),
    reviewed_at    timestamptz
  )`,
  `CREATE INDEX IF NOT EXISTS club_apps_status_idx ON club_applications (status, created_at DESC)`,
];
