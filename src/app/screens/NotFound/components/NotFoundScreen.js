import React from 'react'
import Helmet from 'react-helmet'

function NotFoundScreen () {
  return (
    <div>
      <Helmet
        title="Page not found"
      />
      <h1>404</h1>
    </div>
  )
}

export default NotFoundScreen
