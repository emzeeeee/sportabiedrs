'use strict';
/* Venue-local time helpers (venues are in Europe/Riga, which has daylight saving). */

function partsIn(date, tz) {
  const f = new Intl.DateTimeFormat('en-GB', {
    timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  const o = {};
  for (const p of f.formatToParts(date)) if (p.type !== 'literal') o[p.type] = Number(p.value);
  return o;
}

/** Converts a wall-clock time in a time zone to a UTC Date. */
function zonedToUtc(dateStr, hour, minute, tz) {
  const [y, m, d] = dateStr.split('-').map(Number);
  let guess = Date.UTC(y, m - 1, d, hour, minute);
  for (let i = 0; i < 2; i++) {
    const p = partsIn(new Date(guess), tz);
    const shown = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute);
    guess -= shown - Date.UTC(y, m - 1, d, hour, minute);
  }
  return new Date(guess);
}

/** Formats a UTC Date as 'HH:MM' in a time zone. */
function hhmm(date, tz) {
  const p = partsIn(date, tz);
  return `${String(p.hour).padStart(2, '0')}:${String(p.minute).padStart(2, '0')}`;
}

/** 'YYYY-MM-DD' of a UTC Date in a time zone. */
function dateIn(date, tz) {
  const p = partsIn(date, tz);
  return `${p.year}-${String(p.month).padStart(2, '0')}-${String(p.day).padStart(2, '0')}`;
}

const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s + 'T00:00:00Z'));

module.exports = { zonedToUtc, hhmm, dateIn, isDate };
