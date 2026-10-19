'use strict';
/* One function for all booking calls (Vercel Hobby allows 12 functions).
 * vercel.json rewrites keep the public URLs:
 *   GET  /api/bookings           -> my bookings
 *   POST /api/bookings/checkout  -> ?op=checkout
 *   POST /api/bookings/cancel    -> ?op=cancel */
const ops = { checkout: require('./_lib/h/bookings-checkout'), cancel: require('./_lib/h/bookings-cancel'), list: require('./_lib/h/bookings-list') };
module.exports = (req, res) => (ops[String(req.query?.op || 'list')] || ops.list)(req, res);
