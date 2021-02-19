# wochap

[![Build Status](https://travis-ci.com/wochap/wochap.github.io.svg?branch=dev)](https://travis-ci.com/wochap/wochap.github.io)
[![Coverage Status](https://coveralls.io/repos/github/wochap/wochap.github.io/badge.svg?branch=dev)](https://coveralls.io/github/wochap/wochap.github.io?branch=dev)

Personal website powered by [React](https://facebook.github.io/react/) and [Webpack](https://webpack.github.io/)

## Quick start

```sh
# for nix users
$ nix-shell

# install dependencies
$ yarn

# serve with hot reload
$ yarn dev

# serve with hot reload and inspect webpack dev server
# https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js
$ yarn dev:inspect

# build for production with minification
# build static html files
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

### Deployment

Add a secret `ACTIONS_DEPLOY_KEY` (https://developer.github.com/v3/guides/managing-deploy-keys/).

Travis deploys wochap/wochap.github.io, and the `gh action` deploys wochap/es.wochap.github.io.

### [Boilerplate](https://github.com/wochap/webpack-boilerplate#webpack-boilerplate)

### Stack

* React
* React router
* Redux
* [wocss](https://github.com/wocss/wocss)

### Structure

* App: [Route hierarchy](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)
* Styles: [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

### Development

#### Icon font

This project uses [Icomoon](https://icomoon.io/app), to add new icons you have to import the `src/icomoon/selection.json` in the icomoon app, then download the new font from it and drop to `src/icomoon` folder, maybe you must restart webpack.

#### Redux store

##### Collection

Requeriments:

* Custom loaders:
  - lazy-dir-loader: generate a single chunk with all markdown files.
  - lazy-loader: generate a single chunk per markdown file.
  - front-matter loader: transform markdown files to a custom format.
  - markdown-loader: transform markdown files to a custom format.

* [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)

There is `collections` store, it handles markdown files from `src/data` folder.

To add a new `collection` dispatch the actions from `src/app/actions/collections.js` module, these actions use the webpack api to generate chunks, and make webpackJsonp requests.

#### To learn

* [Share propTypes between components](http://stackoverflow.com/questions/30265327/react-js-and-proptypes-repetition-across-shared-components)
* [Complete intro to react](https://btholt.github.io/complete-intro-to-react/)

### Content

#### Writing blog posts

Write the dates in 'DD-MM-YYYY' format.
