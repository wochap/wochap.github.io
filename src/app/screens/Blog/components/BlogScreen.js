import React from 'react'

function BlogScreen ({children}) {
  return children ? React.cloneElement(children) : null
}

BlogScreen.propTypes = {
  children: React.PropTypes.element
}

export default BlogScreen
