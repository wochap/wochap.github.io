import path from 'path'

import {projectRootPath, projectDistPath, projectSourcePath} from '../config'

export default {
  debug: true,
  noInfo: true,
  output: {
    path: projectDistPath
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'src': projectSourcePath,
      'app': path.join(projectSourcePath, 'app'),
      'styles': path.join(projectSourcePath, 'styles'),
      'data': path.join(projectSourcePath, 'data')
    },
    modulesDirectories: ['node_modules', 'shared']
  },
  resolveLoader: {
    // register custom loaders
    alias: {
      'markdown-loader': path.resolve(__dirname, './loaders/markdown'),
      'front-matter-loader': path.resolve(__dirname, './loaders/front-matter'),
      'lazy-loader': path.resolve(__dirname, './loaders/lazy'),
      'lazy-dir-loader': path.resolve(__dirname, './loaders/lazy-dir')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: projectSourcePath,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectSourcePath,
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: projectSourcePath,
        query: {
          limit: 10000,
          name: 'static/img/[name].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        include: projectSourcePath,
        query: {
          limit: 10000,
          name: 'static/fonts/[name].[ext]'
        }
      }, {
        test: /\.ico$/,
        loader: 'file-loader',
        include: projectSourcePath,
        query: {
          name: '[name].ico'
        }
      }
    ]
  },
  eslint: {
    configFile: path.join(projectRootPath, '.eslintrc.js')
  },
  sassLoader: {
    importer: require('node-sass-json-importer')
  },
  postcss: [
    require('lost'),
    require('postcss-responsive-type')(),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })
  ]
}
