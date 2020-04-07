import React from 'react'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'

function generateRoutes({prevPaths = [], key, exact, path = '', onChange, childRoutes, indexRoute = {}, ...config}) {
  const paths = [...prevPaths, path]
  const currentPath = paths.reduce((result, _path) => {
    if ([result, _path].includes('') || result.endsWith('/')) {
      return `${result}${_path}`
    }
    return `${result}/${_path}`
  }, '')
  let children
  if (config.indexRoute || childRoutes?.length > 0) {
    children = (
      <Switch>
        {generateRoutes({...indexRoute, prevPaths: paths})}
        {childRoutes.map((route, i) => generateRoutes({...route, key: i, prevPaths: paths}))}
      </Switch>
    )
  }
  return (
    <Route
      key={key}
      exact={exact}
      path={currentPath}
      render={props => {
        return <config.component {...props}>{children}</config.component>
      }}
    />
  )
}
generateRoutes.propTypes = {
  prevPaths: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line
  key: PropTypes.any,
  path: PropTypes.string,
  component: PropTypes.elementType,
  onChange: PropTypes.func,
  // eslint-disable-next-line
  indexRoute: PropTypes.object,
  exact: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  inheritProps: PropTypes.object,
  childRoutes: PropTypes.arrayOf(PropTypes.object),
}

export default generateRoutes
