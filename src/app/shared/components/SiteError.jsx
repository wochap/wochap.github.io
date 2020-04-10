import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SiteError({headTitle, title, message: error, invert}) {
  const message = error instanceof Error ? error.message : error
  return (
    <div className={`c-site-error ${invert ? 'c-site-error--invert' : ''}`}>
      {headTitle && <Helmet title={headTitle} />}
      <h1 className='c-site-error__title' data-text={title}>
        {title}
      </h1>
      <p className='c-site-error__message u-caps'>{message}</p>
    </div>
  )
}

SiteError.propTypes = {
  headTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Error)]).isRequired,
  invert: PropTypes.bool,
}

export default SiteError
