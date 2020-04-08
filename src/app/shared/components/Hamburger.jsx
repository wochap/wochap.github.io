import React from 'react'
import PropTypes from 'prop-types'

function Hamburger({className, isOpen, ...restProps}) {
  return (
    <button
      {...restProps}
      className={`o-btn ${className}`}
      aria-label={isOpen ? 'Esconder navegación' : 'Mostrar navegación'}
      type='button'
    >
      <div className={`c-hamburger ${isOpen ? 'is-open' : ''}`}>
        <em />
        <em />
        <em />
      </div>
    </button>
  )
}

Hamburger.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
}

export default Hamburger
