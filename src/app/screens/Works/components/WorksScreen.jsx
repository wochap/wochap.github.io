import React from 'react'
import PropTypes from 'prop-types'

function WorksScreen({children}) {
  return children ? React.cloneElement(children) : null
}

WorksScreen.propTypes = {
  children: PropTypes.element,
}

export default WorksScreen
