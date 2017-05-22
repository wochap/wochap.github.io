import React from 'react'
import Helmet from 'react-helmet'

function ScreenHelmet ({title, description = '', canonicalHref}) {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        }, {
          property: 'og:title',
          content: title
        }, {
          property: 'og:description',
          content: description
        }
      ]}
      link={[
        {
          rel: 'canonical',
          href: canonicalHref
        }
      ]}
    />
  )
}

ScreenHelmet.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  canonicalHref: React.PropTypes.string.isRequired
}

export default ScreenHelmet
