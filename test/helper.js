const request = require('supertest');
const chai = require('chai');

const app = require('../lib/app');
const config = require('../config');

chai.config.includeStack = true;
chai.config.showDiff = true;

global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;
global.request = request;
global.config = config;
global.app = app;
