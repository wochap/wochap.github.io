const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'eslint-config-airbnb', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
  env: {
    amd: true,
    node: true,
    es6: true,
    jest: true,
    browser: true,
    mocha: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': isProduction ? 2 : 0,
    'no-debugger': isProduction ? 2 : 0,

    'no-underscore-dangle': [0],
    'import/prefer-default-export': [0],
    'import/no-extraneous-dependencies': [0],

    'react/static-property-placement': ['error', 'static public field'],
    'react/state-in-constructor': ['error', 'never'],
    'react/jsx-props-no-spreading': [0],
    'react/no-deprecated': [0],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/require-default-props': [0],
    'react/no-array-index-key': [0],
    'import/extensions': [0],
    'react/no-danger': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/destructuring-assignment': [0],
  },
}
