import webpackMerge from 'webpack-merge'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'

import webpackConfigProdPreStatic from './config.prod-pre-static.babel'

// routes to render
import routes from '../config/static-routes'

export default webpackMerge(webpackConfigProdPreStatic, {
  output: {
    // the current webpack context is the projectRootPath so
    // we must point the files' output to dist folder
    // to ensure webpack find all chunks
    filename: 'dist/_static/js/[name].js',
    chunkFilename: 'dist/_static/js/chunk.[id].[name].js',
  },
  plugins: [
    new StaticSiteGeneratorPlugin('static', routes),
    // build time gzip
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ]
})
