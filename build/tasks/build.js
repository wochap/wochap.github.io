// run webpack with production config
// build static html files
// generate service-worker with sw-precache

process.env.NODE_ENV = 'production'

import webpack from 'webpack'
import ora from 'ora'
import path from 'path'
import shelljs from 'shelljs'
import swPrecache from 'sw-precache'

import webpackConfigProd from '../webpack/config.prod.babel'
import webpackConfigProdPreStatic from '../webpack/config.prod-pre-static.babel'
import webpackConfigProdStatic from '../webpack/config.prod-static.babel'
import {projectRootPath, projectAssetsPath, projectDistPath, projectPublicPath} from '../config'

let spinner = ora('Building for production...')
spinner.start()

// delete dist folder
shelljs.rm('-rf', projectDistPath)
shelljs.mkdir('-p', projectDistPath)
// copy public folder to dist folder
shelljs.cp('-R', `${projectPublicPath}/*`, projectDistPath)

// run webpack with prod config
webpack(webpackConfigProd).run((err, stats) => {
  spinner.stop()

  if (err) throw err

  // log stats
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  spinner = ora('\nBuilding static markup...')
  spinner.start()

  // pre build static markup
  webpack(webpackConfigProdPreStatic).run((err, stats) => {

    if (err) throw err

    // log stats
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')

    // build static markup
    webpack(webpackConfigProdStatic).run((err, stats) => {
      spinner.stop()

      if (err) throw err

      // log stats
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n')

      // delete temporary build folders
      shelljs.rm('-rf', path.join(projectDistPath, '_static'))
      shelljs.rm('-rf', path.join(projectDistPath, 'dist'))

      // generate service worker
      swPrecache.write(`${projectDistPath}/service-worker.js`, {
        // each time you build, must to update the cacheId
        cacheId: 'wochap-sw-3',

        // ensure all our static, local assets will be cached in background
        staticFileGlobs: [
          `${projectDistPath}/**/!(*map*)`,
        ],
        stripPrefix: projectDistPath,

        runtimeCaching: [
          // cache fonts files
          {
            handler: 'networkFirst',
            urlPattern: /.(svg, eot, ttf, woff, woff2)$/
          }
        ],

        verbose: true
      })
    })
  })
})
