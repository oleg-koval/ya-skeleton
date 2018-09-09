const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const reqId = require('express-request-id')();

const routes = require('./routes');
const log = require('./log');
const { parseQueryString, handleApiError } = require('./middlewares');

// open database connection
require('./database');

const app = express();

app.use(reqId);
// specify multiple subnets as an array
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
app.set('query parser', parseQueryString);
app.use(log.logRequest);

// Cross-origin resource sharing (CORS)
// allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.use(handleApiError);

if (process.env.NODE_ENV !== 'test') {
  app.on('error', (err) => {
    console.error({ err });
  });
}

module.exports = app;
