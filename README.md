# wochap

Personal website powered by [React](https://facebook.github.io/react/) and [Webpack](https://webpack.github.io/)

## Development

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# run all tests and watch
$ npm run test

# run all tests, watch and create a coverage report
$ npm run test-coverage

# build for production with minification and serve dist files at localhost:8080
$ npm run build
```

If you like this setup, check my  [webpack-basic-boilerplate](https://github.com/wochap/webpack-basic-boilerplate/tree/react) (react branch)

## About this project

### Content

#### Blog posts

Write the dates in 'DD-MM-YYYY' format.

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

* [share propTypes between components](http://stackoverflow.com/questions/30265327/react-js-and-proptypes-repetition-across-shared-components)
