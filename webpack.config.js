require('dotenv').config()

const {readdirSync} = require('fs')
const {resolve} = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const myLocalIp = require('my-local-ip')

const CURRENT_IP = myLocalIp()
const externalPath = `http://${CURRENT_IP}:${process.env.WEBPACK_SERVER_PORT}/`
const {ifProduction, ifNotProduction, ifDevelopment, ifSsr, ifNotSsr} = getIfUtils(process.env.NODE_ENV || {}, ['development', 'test', 'production', 'ssr'])
const rootNodeModulesPath = resolve(__dirname, 'node_modules')
const libPath = resolve(__dirname, 'lib')
const distPath = resolve(__dirname, 'dist')
const srcPath = resolve(__dirname, 'src')
const routes = require('./static-routes')

let nodeModules = {} // eslint-disable-line
readdirSync('node_modules')
  .filter(x => {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(mod => {
    nodeModules[mod] = `commonjs ${mod}`
  })


module.exports = {
  // http://jlongster.com/Backend-Apps-with-Webpack--Part-I#p14
  externals: ifSsr(nodeModules, []),
  target: ifSsr('node', 'web'),
  context: srcPath,
  devtool: ifProduction(!!process.env.SOURCE_MAP && 'source-map', ifSsr(false, 'eval')),
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  stats: {
    colors: true,
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false
  },
  devServer: {
    port: process.env.WEBPACK_SERVER_PORT,
    disableHostCheck: true,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },

    // handle fallback for HTML5 history API
    historyApiFallback: true,

    // show compile errors
    overlay: true,

    // serve public folder
    contentBase: resolve(__dirname, 'public'),
    watchContentBase: true,

    // enable HMR on the server
    hot: true,

    // match the output `publicPath`
    publicPath: ifProduction('/', externalPath),

    // webpack build logs config
    stats: {
      colors: true,
      chunks: false
    }
  },
  entry: {
    app: removeEmpty([
      // fix HMR in IE
      ifDevelopment('eventsource-polyfill'),

      ifDevelopment('react-hot-loader/patch'),

      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      ifDevelopment(`webpack-dev-server/client?${externalPath}`),

      ifSsr('./static-build/main.js', './app/main.js')
    ])
  },
  resolve: {
    alias: {
      src: srcPath,
      app: resolve(__dirname, 'src/app'),
      styles: resolve(__dirname, 'src/styles'),
      lib: libPath,
      data: resolve(__dirname, 'data')
    },
    modules: ['node_modules', 'shared']
  },
  resolveLoader: {
    alias: {
      'markdown-loader': `${libPath}/loaders/markdown.js`,
      'front-matter-loader': `${libPath}/loaders/front-matter.js`,
      'lazy-loader': `${libPath}/loaders/lazy.js`,
      'lazy-dir-loader': `${libPath}/loaders/lazy-dir.js`
    }
  },
  output: {
    publicPath: ifDevelopment(externalPath, '/'),
    filename: ifProduction('static/js/bundle.[name].[chunkhash:8].js', ifSsr('_/bundle.[name].js', 'bundle.[name].js')),
    chunkFilename: ifProduction('static/js/chunk.[name].[chunkhash:8].js', 'chunk.[name].js'),
    path: distPath,
    pathinfo: ifNotProduction(),
    libraryTarget: ifSsr('commonjs-module', 'var')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter') // eslint-disable-line
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true
        }
      }, {
        test: /\.css$/,
        use: ifProduction(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
          }),
          ['style-loader', 'css-loader', 'postcss-loader']
        )
      }, {
        test: /\.scss$/,
        use: ifProduction(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          }),
          ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        )
      }, {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: ifProduction('static/img/[name].[hash:8].[ext]', '[name].[ext]')
        }
      }, {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
          name: ifProduction('static/img/[name].[hash:8].[ext]', '[name].[ext]')
        }
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/vnd.ms-fontobject',
          name: ifProduction('static/fonts/[name].[hash:8].[ext]', '[name].[ext]')
        }
      }, {
        test: /\.otf(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'font/opentype',
          name: ifProduction('static/fonts/[name].[hash:8].[ext]', '[name].[ext]')
        }
      }, {
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: ifProduction('static/fonts/[name].[hash:8].[ext]', '[name].[ext]')
        }
      }, {
        test: /\.woff(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: ifProduction('static/fonts/[name].[hash:8].[ext]', '[name].[ext]')
        }
      }, {
        test: /\.woff2(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff2',
          name: ifProduction('static/fonts/[name].[hash:8].[ext]', '[name].[ext]')
        }
      }
    ]
  },
  plugins: removeEmpty([
    // define globals
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: ifDevelopment('"development"', '"production"')
      }
    }),

    new webpack.LoaderOptionsPlugin({
      // css loader config
      minimize: ifProduction(),
      sourceMap: ifProduction(!!process.env.SOURCE_MAP),

      debug: ifNotProduction()
    }),

    ifProduction(
      // decrease moment module size
      // http://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /es/) // eslint-disable-line
    ),

    // any required modules inside node_modules are extracted to vendor
    ifNotSsr(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks ({resource}) {
          // TODO: ignore webpack modules (e.g.: buffer, style-loader, etc)
          return resource &&
            /\.js$/.test(resource) &&
            resource.indexOf(rootNodeModulesPath) === 0
        }
      })
    ),

    // create a specific chunk for these modules
    // https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923#.selnbx3gp
    ifNotSsr(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'react',
        minChunks ({resource}) {
          const targets = ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'react-helmet']

          return resource &&
            /\.js$/.test(resource) &&
            resource.indexOf(rootNodeModulesPath) === 0 &&
            targets.find(t => new RegExp(`${rootNodeModulesPath}/${t}/`, 'i').test(resource))
        }
      })
    ),

    // extract manifest
    ifNotSsr(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      })
    ),

    // catch all - anything used in more than one place
    // ifProduction(
    //   new webpack.optimize.CommonsChunkPlugin({
    //     async: 'common',
    //     minChunks (module, count) {
    //       return count >= 2
    //     }
    //   })
    // ),

    ifProduction(
      new InlineManifestWebpackPlugin({
        name: 'webpackManifest'
      })
    ),

    // enable HMR globally
    ifDevelopment(new webpack.HotModuleReplacementPlugin()),

    // prints more readable module names in the browser console on HMR updates
    ifNotProduction(new webpack.NamedModulesPlugin()),

    ifProduction(
      // minify and optimize the javaScript
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: !!process.env.SOURCE_MAP,
        compress: {
          screw_ie8: true,
          warnings: false
        },
        mangle: {
          screw_ie8: true
        },
        output: {
          comments: false,
          screw_ie8: true
        }
      })
    ),

    process.env.BUNDLE_ANALYZER_REPORT && ifProduction(new BundleAnalyzerPlugin()),

    ifProduction(new ExtractTextPlugin('static/css/[name].[contenthash:8].css')),

    ifNotSsr(
      new HtmlWebpackPlugin({
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency',
        template: './index.html',
        inject: true,
        minify: ifProduction({
          removeComments: true,
          collapseWhitespace: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        })
      })
    ),

    ifSsr(
      // https://github.com/webpack/webpack/issues/3637
      new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
    ),

    ifSsr(
      new StaticSiteGeneratorPlugin({
        entry: '_/bundle.app.js',
        paths: routes
      })
    ),

    ifProduction(
      new FaviconsWebpackPlugin({
        logo: `${srcPath}/favicon.png`,
        prefix: 'static/icons-[hash]/',
        title: 'wochap',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      })
    ),

    ifProduction(
      new SWPrecacheWebpackPlugin({
        cacheId: 'wochap',
        filepath: `${distPath}/service-worker.js`,
        maximumFileSizeToCacheInBytes: 4194304,
        minify: true,
        verbose: true,
        staticFileGlobs: [
          `${distPath}/static/css/**/!(*map*)`,
          `${distPath}/static/js/**/!(*map*)`
        ],
        runtimeCaching: [
          {
            handler: 'networkOnly',
            urlPattern: /\.(png|jpg|jpeg|gif)$/
          }, {
            handler: 'networkFirst',
            urlPattern: /.pdf$/
          }, {
            // use a network first strategy for everything else.
            default: 'networkFirst'
          }
        ]
      })
    ),

    process.env.BROWSER_SYNC && ifNotProduction(
      new BrowserSyncPlugin({
        open: false,
        port: process.env.BROWSER_SYNC_PORT,
        proxy: externalPath
      }, {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      })
    ),

    new ProgressBarPlugin()
  ])
}
