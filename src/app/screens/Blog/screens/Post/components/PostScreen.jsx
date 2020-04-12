import React from 'react'
import data from 'app/config/data'
import withCollectionItem from 'hoc/collection/withCollectionItem'
import SiteArticle from 'components/SiteArticle'
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
