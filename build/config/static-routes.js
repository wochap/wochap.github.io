import fs from 'fs'
import path from 'path'

import {projectSourcePath} from './index'

// get all post markdown files
const postsFiles = fs.readdirSync(path.join(projectSourcePath, 'data/posts'))
// create all possible posts routes
const postsRoutes = postsFiles.map((path) => {
  // extract file name from path file
  let fileName = (path.split('/').pop().split('.'))[0]
  // create the post route
  return `/blog/${fileName}`
})

// get all work markdown files
const worksFiles = fs.readdirSync(path.join(projectSourcePath, 'data/works'))
// create all possible works routes
const worksRoutes = worksFiles.map((path) => {
  // extract file name from path file
  let fileName = (path.split('/').pop().split('.'))[0]
  // create the work route
  return `/works/${fileName}`
})

// exports routes that static-site-generator-webpack-plugin will build
export default [
  '/',
  '/about',
  '/works',
  '/blog',
  '/contact',
  '/404.html',
  ...postsRoutes,
  ...worksRoutes
]
