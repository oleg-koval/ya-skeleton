const express = require('express');
const qs = require('qs');
const cors = require('cors');
const bodyParser = require('body-parser');

const ApiError = require('./models/ApiError');
const routes = require('./routes');

// open database connection
require('./database');

const app = express();

// specify multiple subnets as an array
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

app.set('query parser', (str) => {
  return qs.parse(str, {
    allowDots: false,
    allowPrototypes: true,
    arrayLimit: 1000
  });
});

// Cross-origin resource sharing (CORS)
// allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.use((error, req, res, next) => {
  if (error) {
    if (error instanceof ApiError) {
      return res
        .status(error.status || 500)
        .json({
          message: error.message,
          payload: error.payload
        });
    }

    return next(error);
  }

  return next();
});

if (process.env.NODE_ENV !== 'test') {
  app.on('error', (err) => {
    console.error({ err });
  });
}

module.exports = app;
