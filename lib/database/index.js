const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const config = require('../../config');
// Connecting MongoDB using mongoose to our application
mongoose.connect(
  config.mongoConnectionString,
  { useNewUrlParser: true }
);

