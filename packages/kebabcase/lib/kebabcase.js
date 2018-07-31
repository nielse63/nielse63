
module.exports = string => string
  .replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, match => `-${match.toLowerCase()}`)
  .replace(/^-/, '');
