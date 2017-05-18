# wochap

[![Build Status](https://travis-ci.org/wochap/wochap.github.io.svg?branch=dev)](https://travis-ci.org/wochap/wochap.github.io)
[![Coverage Status](https://coveralls.io/repos/github/wochap/wochap.github.io/badge.svg?branch=dev)](https://coveralls.io/github/wochap/wochap.github.io?branch=dev)

Personal website powered by [React](https://facebook.github.io/react/) and [Webpack](https://webpack.github.io/)

## Quick start

Rename `.env.example` to `.env`. Then:

```sh
# install dependencies
$ yarn

# serve with hot reload
$ yarn build:watch
# or
$ yarn dev

# serve with hot reload and inspect webpack dev server
# https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js
$ yarn dev:inspect

# build for production with minification
$ yarn build

# run tests
$ yarn test

# run tests and watch
$ yarn test:watch

# run test coverage report
$ yarn test:coverage
```

**NOTE: For disable source map or bundle analyzer report (both on production only) and browser sync (on development), just remove it from `.env` file.**

## Documentation

### Stack

* React
* React router
* Redux
* wocss

### [Boilerplate](https://github.com/wochap/webpack-boilerplate#webpack-boilerplate)
