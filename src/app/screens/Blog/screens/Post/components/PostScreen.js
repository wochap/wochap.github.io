import React from 'react'
import data from 'app/config/data'
import SiteArticle from 'components/SiteArticle' // eslint-disable-line

function PostScreen (props) {
  return (
    <SiteArticle
      {...props}
      head={{
        canonicalHref: data.screens.blog.canonicalHref
      }}
    />
  )
}

export default PostScreen
