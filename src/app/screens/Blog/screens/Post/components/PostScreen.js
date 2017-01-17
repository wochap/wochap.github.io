import React from 'react'
import data from 'app/config/data'
import withCollectionItem from 'hoc/collection/withCollectionItem'
import SiteArticle from 'components/SiteArticle' // eslint-disable-line

export function PostScreen (props) {
  return (
    <SiteArticle
      {...props}
      head={{
        canonicalHref: data.screens.blog.canonicalHref
      }}
    />
  )
}

export default withCollectionItem(PostScreen, 'posts')
