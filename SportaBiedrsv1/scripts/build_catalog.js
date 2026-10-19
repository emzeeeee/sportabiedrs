#!/usr/bin/env node
/**
 * Builds the server-side price catalogue (api/_lib/catalog.json) from the
 * PRODUCTS array in app.js. The checkout endpoints use this file as the ONLY
 * source of truth for prices, so a visitor can never change what they pay by
 * editing the cart in the browser.
 *
 * Run after every change to PRODUCTS:  npm run catalog
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const line = appJs.split('\n').find((l) => l.startsWith('const PRODUCTS = '));
if (!line) {
  console.error('Could not find "const PRODUCTS = " in app.js');
  process.exit(1);
}

const products = vm.runInNewContext('(' + line.replace(/^const PRODUCTS = /, '').replace(/;\s*$/, '') + ')');
const catalog = {};
for (const p of products) {
  if (!p.id || typeof p.price !== 'number' || !(p.price > 0)) {
    console.error('Skipping invalid product:', p.id);
    continue;
  }
  catalog[p.id] = {
    name: String(p.name),
    // price in euro cents, integer, to avoid float errors
    cents: Math.round(p.price * 100),
    variants: Array.isArray(p.variants) ? p.variants.map(String) : [],
  };
}

const outDir = path.join(root, 'api', '_lib');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
console.log(`Wrote ${Object.keys(catalog).length} products to api/_lib/catalog.json`);
