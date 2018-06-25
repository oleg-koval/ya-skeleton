# ya_skeleton

[![Greenkeeper badge](https://badges.greenkeeper.io/oleg-koval/ya-skeleton.svg)](https://greenkeeper.io/) [![build status](https://travis-ci.org/oleg-koval/ya-skeleton.svg?branch=master)](https://travis-ci.org/oleg-koval/ya-skeleton) [![linted by sexy yo!](https://img.shields.io/badge/linted%20by-sexy%20yo!-brightgreen.svg)](https://github.com/markelog/eslint-config-sexy)

> Dockerized skeleton based on expressjs framework, with mongo support

This repo contains `.env` file which should be definetely added to `.gitignore`, but in this case it is just an example. Be sure to add this file to your ignore!

## Installation

This is a [Node.js](https://nodejs.org/) skeleton.


## Run the server

First of all follow [this guide](https://docs.docker.com/compose/install/) for docker && docker-compose installation. Be sure to have latest versions installed.

To run server and mongodb in containers:

```sh
docker-compose build && docker-compose up
```

## Tests

Locally with npm (be sure to have installed & running Mongo service and NodeJS):

```sh
npm install
npm test
```

Run tests in Docker:

```sh
npm run test:docker
```

## Dependencies

- [bluebird](https://ghub.io/bluebird): Full featured Promises/A+ implementation with exceptionally good performance
- [body-parser](https://ghub.io/body-parser): Node.js body parsing middleware
- [cors](https://ghub.io/cors): Node.js CORS middleware
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [mongoose](https://ghub.io/mongoose): Mongoose MongoDB ODM
- [qs](https://ghub.io/qs): A querystring parser that supports nesting and arrays, with a depth limit

## Dev Dependencies

- [bunyan](https://ghub.io/bunyan): a JSON logging library for node.js services
- [danger](https://ghub.io/danger): Unit tests for Team Culture
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-sexy](https://ghub.io/eslint-config-sexy): Mostly sexy config
- [generate-changelog](https://ghub.io/generate-changelog): Generate a changelog from git commits.
- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework
- [should](https://ghub.io/should): test framework agnostic BDD-style assertions
- [supertest](https://ghub.io/supertest): SuperAgent driven library for testing HTTP servers

## Contribute

See [the contribute file](CONTRIBUTING.md)!

## License

MIT © [Oleg Koval](https://github.com/oleg-koval) 2018
