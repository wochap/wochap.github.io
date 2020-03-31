import App from 'app/components/App'
import Home from 'app/screens/Home'
import About from 'app/screens/About'
import Works from 'app/screens/Works'
import Blog from 'app/screens/Blog'
import Contact from 'app/screens/Contact'
import NotFound from 'app/screens/NotFound'

export default {
  path: '/',
  component: App,
  onChange() {
    document.getElementsByClassName('c-app-layout__wrapper')[0].scrollIntoView()
  },
  indexRoute: Home,
  childRoutes: [About, Works, Blog, Contact, NotFound],
}
