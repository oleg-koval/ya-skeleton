const { name, version } = require('../../package.json');

const {
  APPLICATION_VERSION,
  REST_API_EXPOSED_PORT,
  REST_API_HOST,
  MONGO_CONNECTION_STRING,
  TIMEZONE,
  LOG_OBFUSCATE_PLACEHOLDER,
  LOGS,
  LOG_LEVEL,
  LOG_DISABLE,
  LOG_ROTATION_PERIOD,
  SECRET
} = process.env;

module.exports = {
  version: APPLICATION_VERSION,
  port: parseInt(REST_API_EXPOSED_PORT || '3000', 10),
  host: REST_API_HOST || '0.0.0.0',
  mongoConnectionString: MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/test',
  timezone: TIMEZONE,
  logging: {
    obfuscatePlaceHolder: LOG_OBFUSCATE_PLACEHOLDER,
    path: LOGS,
    level: LOG_LEVEL || 'warn',
    disable: LOG_DISABLE,
    rotationPeriod: LOG_ROTATION_PERIOD || '1d',
    copiesCount: parseInt(LOG_ROTATION_PERIOD || '3', 10),
    appName: name,
    appVersion: version
  },
  authSecret: SECRET,
  authSession: {
    session: false
  }
};
