// eslint-disable-next-line
const getAllExceptDraft = new RegExp('^(?!.*\.draft\.' + process.env.SSG_LANG + '\.md$).*\.' + process.env.SSG_LANG + '\.md$', 'i')
// eslint-disable-next-line
const getAll = new RegExp('\.' + process.env.SSG_LANG + '\.md$', 'i')
const contextFilter = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'ssr' ? getAllExceptDraft : getAll

module.exports = {
  chunkName: 'posts',
  folderPath: 'data/posts',
  contextFilter,
  loaders: ['front-matter-loader'],
}
