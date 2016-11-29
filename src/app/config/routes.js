import App from 'app/components/App'
import Home from 'app/screens/Home'
import NotFound from 'app/screens/NotFound'

export default {
  path: '/',
  component: App,
  indexRoute: Home,
  childRoutes: [
    NotFound
  ]
}
