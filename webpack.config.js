require('dotenv-extended').load({
  errorOnMissing: true,
})

const {readdirSync} = require('fs')
const {resolve} = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const {getIfUtils} = require('webpack-config-utils')
const myLocalIp = require('my-local-ip')
const moduleAlias = require('module-alias')

const CURRENT_IP = myLocalIp()
const externalPath = `http://${CURRENT_IP}:${process.env.WEBPACK_SERVER_PORT}/`
const {ifProduction, ifNotProduction, ifDevelopment, ifSsr, ifNotSsr} = getIfUtils(process.env.NODE_ENV || {}, [
  'development',
  'test',
  'production',
  'ssr',
])
const rootNodeModulesPath = resolve(__dirname, 'node_modules')
const libPath = resolve(__dirname, 'lib')
const distPath = resolve(__dirname, 'dist')
const srcPath = resolve(__dirname, 'src')
// eslint-disable-next-line
const routes = require('./static-routes')
const toBoolean = bool => bool === 'true' || bool === true

let nodeModules = {} // eslint-disable-line
readdirSync('node_modules')
  .filter(x => {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(mod => {
    nodeModules[mod] = `commonjs ${mod}`
  })

if (ifSsr()) {
  const nodeModulesResolve = path => resolve(__dirname, `./node_modules/${path}`)
  moduleAlias.addAliases({
    'react-dom': nodeModulesResolve('react-dom/cjs/react-dom.production.min.js'),
    'react-dom/server': nodeModulesResolve('react-dom/cjs/react-dom-server.node.production.min.js'),
    'react': nodeModulesResolve('react/cjs/react.production.min.js'),
    'react-is': nodeModulesResolve('react-is/cjs/react-is.production.min.js'),
  })
}

module.exports = {
  // http://jlongster.com/Backend-Apps-with-Webpack--Part-I#p14
  externals: ifSsr(nodeModules, []),
  target: ifSsr('node', 'web'),
  context: srcPath,
  devtool: ifProduction(toBoolean(process.env.SOURCE_MAP) && 'source-map', ifSsr(false, 'eval')),
  devServer: {
    port: process.env.WEBPACK_SERVER_PORT,
    disableHostCheck: true,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
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
  },
  entry: {
    app: [
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      ifDevelopment(`webpack-dev-server/client?${externalPath}`),

      ifSsr('./static-build/main.js', './app/main.js'),
    ].filter(Boolean),
  },
  resolve: {
    alias: {
      src: srcPath,
      app: resolve(__dirname, 'src/app'),
      styles: resolve(__dirname, 'src/styles'),
      lib: libPath,
      data: resolve(__dirname, 'data'),
    },
    modules: ['node_modules', 'shared'],
    extensions: ['.wasm', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  resolveLoader: {
    alias: {
      'markdown-loader': `${libPath}/loaders/markdown.js`,
      'front-matter-loader': `${libPath}/loaders/front-matter.js`,
      'lazy-loader': `${libPath}/loaders/lazy.js`,
      'lazy-dir-loader': `${libPath}/loaders/lazy-dir.js`,
    },
  },
  output: {
    publicPath: ifDevelopment(externalPath, '/'),
    filename: ifProduction('static/js/bundle.[name].[contenthash:8].js', ifSsr('_/bundle.[name].js', 'bundle.[name].js')),
    chunkFilename: ifProduction('static/js/chunk.[name].[contenthash:8].js', 'chunk.[name].js'),
    path: distPath,
    pathinfo: ifNotProduction(),
    libraryTarget: ifSsr('commonjs-module', 'var'),
  },
  optimization: {
    ...ifNotSsr(
      {
        runtimeChunk: {
          name: 'webpackManifest',
        },
        splitChunks: {
          cacheGroups: {
            // any required modules inside node_modules are extracted to vendor
            vendor: {
              test({resource}) {
                return resource && /\.js$/.test(resource) && resource.indexOf(rootNodeModulesPath) === 0
              },
              chunks: 'initial',
              name: 'vendor',
              priority: 9,
              enforce: true,
            },
            react: {
              test({resource}) {
                const targets = ['react', 'react-dom', 'react-redux', 'react-router-dom', 'react-router-redux', 'react-helmet']

                return (
                  resource &&
                  /\.js$/.test(resource) &&
                  resource.indexOf(rootNodeModulesPath) === 0 &&
                  targets.find(t => new RegExp(`${rootNodeModulesPath}/${t}/`, 'i').test(resource))
                )
              },
              chunks: 'initial',
              name: 'react',
              priority: 10,
              enforce: true,
            },
          },
        },
      },
      {},
    ),
  },
  module: {
    rules: [
      ifProduction({
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter'), // eslint-disable-line
        },
      }),
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: ifDevelopment(),
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: ifDevelopment(),
        },
      },
      {
        test: /\.css$/,
        use: ifProduction([MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'], ['style-loader', 'css-loader', 'postcss-loader']),
      },
      {
        test: /\.scss$/,
        use: ifProduction(
          [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
          ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        ),
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: ifProduction('static/img/[name].[contenthash:8].[ext]', '[name].[ext]'),
        },
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
          name: ifProduction('static/img/[name].[contenthash:8].[ext]', '[name].[ext]'),
        },
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/vnd.ms-fontobject',
          name: ifProduction('static/fonts/[name].[contenthash:8].[ext]', '[name].[ext]'),
        },
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'font/opentype',
          name: ifProduction('static/fonts/[name].[contenthash:8].[ext]', '[name].[ext]'),
        },
      },
      {
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: ifProduction('static/fonts/[name].[contenthash:8].[ext]', '[name].[ext]'),
        },
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: ifProduction('static/fonts/[name].[contenthash:8].[ext]', '[name].[ext]'),
        },
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff2',
          name: ifProduction('static/fonts/[name].[contenthash:8].[ext]', '[name].[ext]'),
        },
      },
    ].filter(Boolean),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': ifDevelopment('"development"', '"production"'),
      'GATSBY_DISQUS_SHORTNAME': ifDevelopment('"staging-cevichan"', '"cevichan"'),
    }),

    ifProduction(
      // decrease moment module size
      // http://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /es/), // eslint-disable-line
    ),

    // enable HMR globally
    ifDevelopment(new webpack.HotModuleReplacementPlugin()),

    ifDevelopment(new ReactRefreshWebpackPlugin()),

    toBoolean(process.env.BUNDLE_ANALYZER_REPORT) && ifProduction(new BundleAnalyzerPlugin()),

    ifProduction(
      new MiniCssExtractPlugin({
        filename: ifProduction('static/css/bundle.[name].[contenthash:8].css', 'bundle.[name].css'),
        chunkFilename: ifProduction('static/css/chunk.[name].[contenthash:8].css', 'bundle.[name].css'),
      }),
    ),

    ifNotSsr(
      new HtmlWebpackPlugin({
        template: './index.html',
        minify: ifProduction({
          removeComments: true,
          collapseWhitespace: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        }),
        gtmScript: ifProduction(
          `
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W26VS3L');</script>
            <!-- End Google Tag Manager -->
          `,
          `
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=y3AVD4la6JeAR7pPwjn1Vg&gtm_preview=env-3&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W26VS3L');</script>
            <!-- End Google Tag Manager -->
          `,
        ),
        gtmNoScript: ifProduction(
          `
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W26VS3L"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
          `,
          `
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W26VS3L&gtm_auth=y3AVD4la6JeAR7pPwjn1Vg&gtm_preview=env-3&gtm_cookies_win=x"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
          `,
        ),
      }),
    ),

    ifSsr(
      // https://github.com/webpack/webpack/issues/3637
      new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    ),

    ifSsr(
      new StaticSiteGeneratorPlugin({
        entry: '_/bundle.app.js',
        paths: routes,
      }),
    ),

    ifProduction(
      new FaviconsWebpackPlugin({
        logo: `${srcPath}/favicon.png`,
        prefix: 'static/icons-[contenthash:8]/',
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
          windows: false,
        },
      }),
    ),

    ifProduction(
      new SWPrecacheWebpackPlugin({
        cacheId: 'wochap',
        filepath: `${distPath}/service-worker.js`,
        maximumFileSizeToCacheInBytes: 4194304,
        minify: true,
        verbose: true,
        staticFileGlobs: [`${distPath}/static/css/**/!(*map*)`, `${distPath}/static/js/**/!(*map*)`],
        runtimeCaching: [
          {
            handler: 'networkOnly',
            urlPattern: /\.(png|jpg|jpeg|gif)$/,
          },
          {
            handler: 'networkFirst',
            urlPattern: /.pdf$/,
          },
          {
            // use a network first strategy for everything else.
            default: 'networkFirst',
          },
        ],
      }),
    ),

    toBoolean(process.env.BROWSER_SYNC) &&
      ifNotProduction(
        new BrowserSyncPlugin(
          {
            open: false,
            port: process.env.BROWSER_SYNC_PORT,
            proxy: externalPath,
          },
          {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false,
          },
        ),
      ),

    ifNotSsr() && ifProduction(new InlineManifestWebpackPlugin('webpackManifest')),

    ifDevelopment(
      new ForkTsCheckerWebpackPlugin({
        tsconfig: resolve(__dirname, 'tsconfig.json'),
      }),
    ),

    new ProgressBarPlugin(),
  ].filter(Boolean),
}
