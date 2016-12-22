import React from 'react'

function WorksScreen ({children}) {
  return children ? React.cloneElement(children) : null
}

WorksScreen.propTypes = {
  children: React.PropTypes.element
}

export default WorksScreen
