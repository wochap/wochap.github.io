import React from 'react'

function Hamburger ({isOpen}) {
  return (
    <button
      className="o-btn"
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
  isOpen: React.PropTypes.bool
}

export default Hamburger
