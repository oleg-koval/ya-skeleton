const qs = require('qs');

module.exports = (str) => {
  return qs.parse(str, {
    allowDots: false,
    allowPrototypes: true,
    arrayLimit: 1000
  });
};
