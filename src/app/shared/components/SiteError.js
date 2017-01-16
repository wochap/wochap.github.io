import React from 'react'
import Helmet from 'react-helmet'

function SiteError ({headTitle, title, message}) {
  return (
    <div className="c-site-error">
      {headTitle && <Helmet title={headTitle} />}
      <h1 className="c-site-error__title" data-text={title}>{title}</h1>
      <p className="c-site-error__message u-caps">{message}</p>
    </div>
  )
}

SiteError.propTypes = {
  headTitle: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
}

export default SiteError
