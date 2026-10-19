'use strict';
/* GET /api/omniva-locations -> { cities: { "Rīga": ["Name - Street", ...], ... } }
 * Served from the bundled data/omniva-lockers.json and cached at the edge. */

const { send, handler } = require('./_lib/http');
const lockers = require('../data/omniva-lockers.json');

module.exports = handler(['GET'], async (_req, res) => {
  return send(res, 200, { cities: lockers }, { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800' });
});
