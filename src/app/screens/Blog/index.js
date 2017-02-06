import topBar from 'utils/topBar'
import Post from './screens/Post'
import Posts from './screens/Posts'

export default {
  path: 'blog',
  getComponent (nextState, cb) {
    topBar.show()

    require.ensure([], (require) => {
      topBar.hide()

      cb(null, require('./components/BlogScreen').default) // eslint-disable-line
    }, 'BlogScreen')
  },
  indexRoute: Posts,
  childRoutes: [
    Post
  ]
}
