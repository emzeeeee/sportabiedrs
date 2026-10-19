'use strict';
/* GET /api/me (?view=me) and GET /api/orders (?view=orders), see vercel.json rewrites. */
const views = { me: require('./_lib/h/account-me'), orders: require('./_lib/h/account-orders') };
module.exports = (req, res) => (views[String(req.query?.view || 'me')] || views.me)(req, res);
