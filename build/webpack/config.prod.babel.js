import path from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin'
import AssetsPlugin from 'assets-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import Visualizer from 'webpack-visualizer-plugin'

import webpackConfigBase from './config.base.babel'
import {projectSourcePath, projectDistPath, templatePath} from '../config'

export default webpackMerge(webpackConfigBase, {
  cache: true,
  devtool: 'cheap-module-source-map',
  entry: {
    app: path.join(projectSourcePath, 'app/main.js'),
    vendor: ['react', 'react-router', 'react-dom', 'react-redux', 'react-helmet', 'moment', 'classnames']
  },
  output: {
    publicPath: '/',
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader')
      }, {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap')
      }
    ]
  },
  plugins: [
    // define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // decrease moment module size
    // http://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /es\.|en\./),
    // OccurrenceOrderPlugin is needed for long-term caching to work properly
    // see http://mxs.is/googmv
    new webpack.optimize.OccurrenceOrderPlugin(),
    // merge all duplicate modules
    new webpack.optimize.DedupePlugin(),
    // minify and optimize the javaScript
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // extract the CSS into a separate file
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css'),
    // minify and optimize the index.html
    new HtmlWebpackPlugin({
      filename: '_static/index.html',
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      inject: true,
      template: templatePath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        removeComments: true
      }
    }),
    // inline webpack manifest
    // https://www.npmjs.com/package/inline-manifest-webpack-plugin
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),
    // build time gzip
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    // generate a webpack-assets.json file that contains all assets' paths
    // https://github.com/kossnocorp/assets-webpack-plugin
    new AssetsPlugin({
      path: projectDistPath
    }),
    // Visualize and analyze your Webpack bundle to see which modules
    // are taking up space and which might be duplicates.
    new Visualizer()
  ]
})
