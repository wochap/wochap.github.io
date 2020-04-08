import React from 'react'
import PropTypes from 'prop-types'

function BlogScreen({children}) {
  return <>{children}</>
}

BlogScreen.propTypes = {
  children: PropTypes.element,
}

export default BlogScreen
