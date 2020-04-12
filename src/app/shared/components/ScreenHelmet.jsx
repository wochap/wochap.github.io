import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function ScreenHelmet({title, description = '', canonicalHref}) {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:url ',
          content: canonicalHref,
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:site',
          content: '@geanmarroquin',
        },
        {
          property: 'twitter:title',
          content: title,
        },
        {
          property: 'twitter:description',
          content: description,
        },
        {
          property: 'twitter:creator',
          content: '@geanmarroquin',
        },
        {
          property: 'twitter:domain ',
          content: canonicalHref,
        },
      ]}
      link={[
        {
          rel: 'canonical',
          href: canonicalHref,
        },
      ]}
    />
  )
}

ScreenHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalHref: PropTypes.string.isRequired,
}

export default ScreenHelmet
