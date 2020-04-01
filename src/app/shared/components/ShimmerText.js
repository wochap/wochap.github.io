import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function ShimmerText({darken = false, block = false, text, children}) {
  return (
    <div
      className={classNames('c-shimmer-text', {
        'c-shimmer-text--darken': darken,
        'c-shimmer-text--block': block,
      })}
    >
      <div className='c-shimmer-text__text u-blokk-font'>{text || children}</div>
    </div>
  )
}

ShimmerText.propTypes = {
  darken: PropTypes.bool,
  block: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node,
}

export default ShimmerText
