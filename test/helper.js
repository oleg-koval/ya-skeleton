const request = require('supertest');
const app = require('../lib/app');
const config = require('../lib/config');

global.request = request;
global.app = app;
global.config = config;
