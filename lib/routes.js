const express = require('express');
const { log } = require('./log');

const ApiError = require('./models/ApiError');

const routes = express();

routes.post('/debug/test', (req, res) => {
  return res.json({ test: 'ok', another: 1 });
});

routes.post('/debug/error', () => {
  const err = new ApiError('here is the problem');
  log.error(err, 'new error log');

  throw err;
});

module.exports = routes;
