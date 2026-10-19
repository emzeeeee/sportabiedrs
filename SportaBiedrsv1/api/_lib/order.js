'use strict';
/* Order validation and pricing. ALL money maths happens here, on the server,
 * from api/_lib/catalog.json. Prices sent by the browser are ignored. */

const catalog = require('./catalog.json');
const { clean, isEmail } = require('./http');

const SHIPPING_CENTS = { omniva: 299, courier: 499 };
const MAX_LINES = 30;
const MAX_QTY = 20;

function fail(message, code) {
  return Object.assign(new Error(message), { status: 400, code });
}

/** Turns the untrusted cart from the browser into trusted lines with server prices. */
function priceItems(rawItems) {
  if (!Array.isArray(rawItems) || rawItems.length === 0) throw fail('Cart is empty', 'EMPTY_CART');
  if (rawItems.length > MAX_LINES) throw fail('Too many cart lines', 'TOO_MANY_LINES');
  const lines = [];
  for (const it of rawItems) {
    const product = catalog[String(it?.id)];
    if (!product) throw fail('Unknown product', 'UNKNOWN_PRODUCT');
    const qty = Number(it.quantity);
    if (!Number.isInteger(qty) || qty < 1 || qty > MAX_QTY) throw fail('Invalid quantity', 'BAD_QUANTITY');
    let variant = '';
    if (product.variants.length) {
      variant = clean(it.variant ?? it.variantTitle, 80);
      if (!product.variants.includes(variant)) throw fail('Choose a valid variant', 'BAD_VARIANT');
    }
    lines.push({
      id: String(it.id),
      name: product.name + (variant ? ` (${variant})` : ''),
      variant,
      cents: product.cents,
      quantity: qty,
    });
  }
  return lines;
}

function validateCustomer(body) {
  const name = clean(body?.customer?.name ?? body?.name, 120);
  const email = clean(body?.customer?.email ?? body?.email, 254).toLowerCase();
  if (name.length < 2) throw fail('Name is required', 'BAD_NAME');
  if (!isEmail(email)) throw fail('Valid email is required', 'BAD_EMAIL');
  const d = body?.delivery || {};
  const method = clean(d.method, 20);
  if (!Object.prototype.hasOwnProperty.call(SHIPPING_CENTS, method)) throw fail('Choose a delivery method', 'BAD_DELIVERY');
  const destination = clean(d.destination, 300);
  if (destination.length < 4) throw fail('Delivery destination is required', 'BAD_DESTINATION');
  return { name, email, method, destination };
}

function totals(lines, method) {
  const subtotal = lines.reduce((s, l) => s + l.cents * l.quantity, 0);
  const shipping = SHIPPING_CENTS[method];
  return { subtotal, shipping, total: subtotal + shipping };
}

const eur = (cents) => (cents / 100).toLocaleString('lv-LV', { style: 'currency', currency: 'EUR' });

module.exports = { priceItems, validateCustomer, totals, eur, SHIPPING_CENTS };
