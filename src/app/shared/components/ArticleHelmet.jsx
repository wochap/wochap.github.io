import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import data from 'app/config/data'

function ArticleHelmet({imageUrl, publishedTime, tags = []}) {
  const metaTags = tags.map(tag => ({
    property: 'article:tag',
    content: tag,
  }))

  return (
    <Helmet
      meta={[
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:image',
          content: imageUrl,
        },
        {
          property: 'article:published_time',
          content: publishedTime,
        },
        {
          property: 'article:author',
          content: `https://twitter.com/${data.twitterUser}`,
        },
        {
          property: 'twitter:image',
          content: imageUrl,
        },
        ...metaTags,
      ]}
    />
  )
}

ArticleHelmet.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default ArticleHelmet
