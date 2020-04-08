import React from 'react'
import PropTypes from 'prop-types'

function BlogScreen({children}) {
  return children ? React.cloneElement(children) : null
}

BlogScreen.propTypes = {
  children: PropTypes.element,
}

export default BlogScreen
