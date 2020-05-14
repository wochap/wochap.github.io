import React from 'react'
import withCollectionItem from 'hoc/collection/withCollectionItem'
import SiteArticle from 'components/SiteArticle'
import data from 'app/config/data'
import PostSchema from './PostSchema'
import PostComments from './PostComments'

export function PostScreen(props) {
  const {canonicalHref} = data.screens.blog

  return (
    <>
      <SiteArticle
        {...props}
        head={{
          canonicalHref,
        }}
      >
        <PostComments {...props} />
      </SiteArticle>
      <PostSchema {...props} />
    </>
  )
}

export default withCollectionItem(PostScreen, 'posts')
