const { name, version } = require('../package');

const config = {};

// server
config.HOST = process.env.REST_API_HOST || '0.0.0.0';
config.PORT = parseInt(process.env.REST_API_EXPOSED_PORT || '3000', 10);

// database
config.MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/test';

// LOGS
config.LOG_OBFUSCATE_PLACEHOLDER = process.env.LOG_OBFUSCATE_PLACEHOLDER;
config.LOGS_PATH = process.env.LOGS;
config.LOG_LEVEL = process.env.LOG_LEVEL || 'warn';
config.LOG_DISABLE = process.env.LOG_DISABLE;
config.LOG_ROTATION_PERIOD = process.env.LOG_ROTATION_PERIOD || '1d'; // daily rotation
config.LOG_COPIES_COUNT = parseInt(process.env.LOG_ROTATION_PERIOD || '3', 10); // keep 3 back copies
config.LOG_APP_NAME = name;
config.LOG_APP_VERSION = version;

module.exports = config;
