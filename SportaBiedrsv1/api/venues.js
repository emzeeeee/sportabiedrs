'use strict';
/* GET /api/venues -> bookable venues;  GET /api/venues/:id/slots?date= -> slots (rewritten to ?id=). */
const list = require('./_lib/h/venues-list');
const slots = require('./_lib/h/venues-slots');
module.exports = (req, res) => (req.query?.id ? slots(req, res) : list(req, res));
