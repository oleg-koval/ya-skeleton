const bunyan = require('bunyan');

const { logging } = require('../config');

const options = {
  name: logging.appName,
  level: logging.disable ? bunyan.FATAL + 1 : logging.level, // turn off logging https://github.com/trentm/node-bunyan/pull/148#issuecomment-63018668
  version: logging.appVersion,
  src: true,
  obfuscate: ['body.password'],
  period: logging.rotationPeriod,
  count: logging.copiesCount,
  obfuscatePlaceholder: logging.obfuscatePlaceholder,
  streams: [],
  genReqId: req => req.id
};

const stdout = { stream: process.stdout };

if (process.env.NODE_ENV !== 'test') {
  options.streams.push(
    {
      path: `${logging.path}/error-${logging.appName}.log`,
      level: 'error'
    },
    {
      path: `${logging.path}/info-${logging.appName}.log`,
      level: 'info'
    },
    {
      path: `${logging.path}/warn-${logging.appName}.log`,
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
