import React from 'react'
import {matchPath} from 'react-router-dom'
import PropTypes from 'prop-types'
import AppLayout from 'components/AppLayout'

function matchRoute(url, urlPattern) {
  return !!matchPath(url, {
    path: urlPattern,
    exact: true,
  })
}

function App({location, children}) {
  const {pathname} = location
  let headerProps
  if (matchRoute(pathname, '/')) {
    headerProps = {
      isFixed: true,
      isHome: true,
    }
  } else if (matchRoute(pathname, '/works/:fileName')) {
    headerProps = {isFixed: true}
  } else if (matchRoute(pathname, '/works') || matchRoute(pathname, '/contact') || matchRoute(pathname, '/about')) {
    headerProps = {}
  } else if (matchRoute(location.pathname, '*')) {
    headerProps = {isFixed: true}
  }
  return <AppLayout headerProps={headerProps}>{children}</AppLayout>
}

App.propTypes = {
  // eslint-disable-next-line
  location: PropTypes.any,
  children: PropTypes.element,
}

export default App
