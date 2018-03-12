process.env.NODE_ENV = 'test';
process.env.MONGO_CONNECTION_STRING = process.env.TEST_MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/test';
