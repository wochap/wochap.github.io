export default {
  chunkName: 'posts',
  folderPath: 'src/data/posts',
  contextFilter: /\.md$/,
  loaders: [
    'front-matter-loader'
  ]
}
