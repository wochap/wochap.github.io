import React from 'react'
import PropTypes from 'prop-types'
import t from 'app/shared/utils/t'

function Hamburger({className, isOpen, ...restProps}) {
  return (
    <button
      {...restProps}
      className={`o-btn ${className}`}
      aria-label={isOpen ? t('Hide nav', 'Esconder navegación') : t('Show nav', 'Mostrar navegación')}
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
