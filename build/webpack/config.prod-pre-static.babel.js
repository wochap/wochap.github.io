// we must build two times so that webpack finds all chunks

import path from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'

import webpackConfigBase from './config.base.babel'
import {projectSourcePath} from '../config'

export default webpackMerge(webpackConfigBase, {
  // necessary for 'static-site-generator-webpack-plugin' works with split points
  target: 'node',
  devtool: false,
  entry: {
    static: path.join(projectSourcePath, 'static-build/main.js')
  },
  output: {
    publicPath: '/',
    // save output in an temporal folder
    filename: '_static/js/[name].js',
    chunkFilename: '_static/js/chunk.[id].[name].js',
    // necessary for 'static-site-generator-webpack-plugin' works with split points
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})
