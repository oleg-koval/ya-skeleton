const { name, version } = require('../package.json');

module.exports = {
  obfuscatePlaceHolder: process.env.LOG_OBFUSCATE_PLACEHOLDER,
  path: process.env.LOGS,
  level: process.env.LOG_LEVEL,
  disable: process.env.LOG_DISABLE,
  rotationPeriod: process.env.LOG_ROTATION_PERIOD,
  copiesCount: parseInt(process.env.LOG_ROTATION_PERIOD, 10),
  appName: name,
  appVersion: version
};
