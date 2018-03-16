const bunyan = require('bunyan');

const config = require('./config');

const options = {
  name: config.LOG_APP_NAME,
  level: config.LOG_DISABLE ? (bunyan.FATAL + 1) : config.LOG_LEVEL, // turn off logging https://github.com/trentm/node-bunyan/pull/148#issuecomment-63018668
  version: config.LOG_APP_VERSION,
  src: true,
  obfuscate: [
    'body.password'
  ],
  period: config.LOG_ROTATION_PERIOD,
  count: config.LOG_COPIES_COUNT,
  obfuscatePlaceholder: config.LOG_OBFUSCATE_PLACEHOLDER,
  streams: [],
  genReqId: req => req.id
};

const stdout = { stream: process.stdout };

if (process.env.NODE_ENV !== 'test') {
  options.streams.push(
    {
      path: `${config.LOGS_PATH}/error-${config.LOG_APP_NAME}.log`,
      level: 'error'
    },
    {
      path: `${config.LOGS_PATH}/info-${config.LOG_APP_NAME}.log`,
      level: 'info'
    },
    {
      path: `${config.LOGS_PATH}/warn-${config.LOG_APP_NAME}.log`,
      level: 'warn'
    }
  );
}

// this env variable can be one of 'error', 'info', 'warn' etc
if (process.env.STDOUT_LOG_LEVEL) {
  stdout.level = process.env.STDOUT_LOG_LEVEL;
}
options.streams.push(stdout);

module.exports = {
  log: bunyan.createLogger(options),
  logRequest: require('express-bunyan-logger')(options)
};
