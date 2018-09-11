const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));

mongoose.connection.on('error', err => console.error({ err }, `Mongoose default connection error: ${err}`));

mongoose.connection.on('disconnected', () =>
  console.log('Mongoose default connection disconnected'));

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
