module.exports = {
  version: process.env.APPLICATION_VERSION,
  port: parseInt(process.env.REST_API_EXPOSED_PORT, 10),
  host: process.env.REST_API_HOST,
  mongoConnectionString: process.env.MONGO_CONNECTION_STRING,
  timezone: process.env.TIMEZONE,
  logging: require('../logging'),
  authSecret: process.env.SECRET,
  authSession: {
    session: false
  }
};
