import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import data, {BASE_URL_EN, BASE_URL_ES} from 'app/config/data'

function AlternateHelmet({canonicalHref}) {
  // TODO: check if blog/work en/es version exists
  const linkCleaned = canonicalHref.replace(new RegExp(`${data.baseUrl}/?`, 'i'), '')
  return (
    <Helmet
      link={[
        {
          rel: 'alternate',
          hreflang: 'en',
          href: `${BASE_URL_EN}/${linkCleaned}`,
        },
        {
          rel: 'alternate',
          hreflang: 'es',
          href: `${BASE_URL_ES}/${linkCleaned}`,
        },
      ]}
    />
  )
}

AlternateHelmet.propTypes = {
  canonicalHref: PropTypes.string.isRequired,
}

export default AlternateHelmet
