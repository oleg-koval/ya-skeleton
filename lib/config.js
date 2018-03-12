const config = {};

// server
config.HOST = process.env.REST_API_HOST || '0.0.0.0';
config.PORT = parseInt(process.env.REST_API_EXPOSED_PORT || '3000', 10);

// database
config.MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/test';

module.exports = config;
