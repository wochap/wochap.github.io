import React from 'react'
import Helmet from 'react-helmet'
import data from 'app/config/data'

function ArticleHelmet ({imageUrl, publishedTime, tags = []}) {
  const metaTags = tags.map(tag => ({
    property: 'article:tag',
    content: tag
  }))

  return (
    <Helmet
      meta={[
        {
          property: 'og:type',
          content: 'article'
        }, {
          property: 'og:image',
          content: imageUrl
        }, {
          property: 'article:published_time',
          content: publishedTime
        }, {
          property: 'article:author',
          content: `https://twitter.com/${data.twitterUser}`
        },
        ...metaTags
      ]}
    />
  )
}

ArticleHelmet.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  publishedTime: React.PropTypes.string.isRequired,
  tags: React.PropTypes.arrayOf(React.PropTypes.string)
}

export default ArticleHelmet
