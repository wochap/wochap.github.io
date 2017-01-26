const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'extends': [
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint-config-airbnb'
  ],
  'env': {
    'browser': true,
    'node': true,
    'jest': true
  },
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack/config.base.babel.js'
      }
    }
  },
  rules: {
    'semi': [2,'never'],
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
    'no-console': DEBUG ? 0 : 2,
    'no-debugger': DEBUG ? 0 : 2
  }
}
