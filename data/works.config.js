const contextFilter = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'ssr' ? /^(?!.*\.draft\.md$).*\.md$/ : /\.md$/

module.exports = {
  chunkName: 'works',
  folderPath: 'data/works',
  contextFilter,
  loaders: ['front-matter-loader'],
}
