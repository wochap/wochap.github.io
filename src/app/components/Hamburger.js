import React from 'react'

function Hamburger (props) {
  const {className, isOpen} = props

  return (
    <button
      {...props}
      className={`o-btn ${className}`}
      aria-label="Mostrar/Esconder navegación"
      type="button"
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
  className: React.PropTypes.string,
  isOpen: React.PropTypes.bool
}

export default Hamburger
