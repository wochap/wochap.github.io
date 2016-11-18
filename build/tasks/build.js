// run webpack with production config

process.env.NODE_ENV = 'production'

import webpack from 'webpack'
import ora from 'ora'
import path from 'path'
import shelljs from 'shelljs'

import webpackConfigProd from '../webpack/config.prod.babel'
import {projectRootPath, projectAssetsPath, projectDistPath, projectDistAssetsPath} from '../config'

let spinner = ora('Building for production...')

spinner.start()

// delete dist folder
shelljs.rm('-rf', projectDistPath)
shelljs.mkdir('-p', projectDistPath)
shelljs.mkdir('-p', projectDistAssetsPath)
// copy static folder to dist/static folder
shelljs.cp('-R', `${projectAssetsPath}/*`, projectDistAssetsPath)

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
})
