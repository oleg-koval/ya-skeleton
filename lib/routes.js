const express = require('express');

const routes = express();

routes.post('/debug/test', (req, res) => {
  return res.json({ test: 'ok' });
});

module.exports = routes;
