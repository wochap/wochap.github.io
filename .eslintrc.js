const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint-config-airbnb'
  ],
  settings: {
    'import/resolver': 'eslint-import-resolver-webpack'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'no-console': isProduction ? 2 : 0,
    'no-debugger': isProduction ? 2 : 0,

    // backwards compatibility
    'semi': [2, 'never'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'object-curly-spacing': [2, 'never'],
    'space-before-function-paren': [2, 'always'],
    'comma-dangle': [2, 'never'],
    'no-underscore-dangle': [0],
    'arrow-body-style': [0],
    'no-nested-ternary': [0],
    'react/no-danger': [0],
    'import/prefer-default-export': [0],
    'import/no-named-as-default': [0],
    'max-len': [0],

    'react/require-default-props': [0],
    'react/no-array-index-key': [0],
    'import/extensions': [0],
    'arrow-parens': [0]
  }
}
