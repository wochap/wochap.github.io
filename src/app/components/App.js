import React from 'react'
import PropTypes from 'prop-types'
import AppLayout from 'components/AppLayout'

function App({children, routes}) {
  const {layoutProps} = routes[routes.length - 1]

  return <AppLayout {...layoutProps}>{children}</AppLayout>
}

App.propTypes = {
  children: PropTypes.element,
  routes: PropTypes.array, // eslint-disable-line
}

export default App
