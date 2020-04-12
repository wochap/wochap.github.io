const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
    },
  ],
  '@babel/preset-react',
  '@babel/preset-flow',
]
const commonPlugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  'macros',
]
const clientPlugins = [
  ...commonPlugins,
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: 3,
    },
  ],
]

module.exports = {
  env: {
    test: {
      presets: [...presets, '@babel/preset-typescript'],
      plugins: [...commonPlugins, 'transform-es2015-modules-commonjs', 'dynamic-import-node'],
    },
    ssr: {
      presets,
      plugins: clientPlugins,
    },
    development: {
      presets,
      plugins: clientPlugins,
    },
    production: {
      presets,
      plugins: clientPlugins,
    },
  },
}
