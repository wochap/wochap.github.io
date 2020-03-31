import NotFoundScreen from './components/NotFoundScreen'

export default {
  path: '*',
  component: NotFoundScreen,
  layoutProps: {
    headerProps: {
      isFixed: true,
    },
  },
}
