import React from 'react'
import classNames from 'classnames'

function ShimmerText ({darken = false, block = false, text, children}) {
  return (
    <div
      className={classNames('c-shimmer-text', {
        'c-shimmer-text--darken': darken,
        'c-shimmer-text--block': block
      })}
    >
      <div className="c-shimmer-text__text u-blokk-font">{text || children}</div>
    </div>
  )
}

ShimmerText.propTypes = {
  darken: React.PropTypes.bool,
  block: React.PropTypes.bool,
  text: React.PropTypes.string,
  children: React.PropTypes.node
}

export default ShimmerText
