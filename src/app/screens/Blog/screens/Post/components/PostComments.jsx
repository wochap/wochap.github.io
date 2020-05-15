import React from 'react'
import Disqus from 'gatsby-plugin-disqus/components/Disqus'
import {articleShape} from 'app/shared/PropTypes/article'

import data from 'app/config/data'

function PostComments({item}) {
  if (!item?.state?.isFulfilled || !!item?.state?.error) {
    return null
  }

  const {frontMatter} = item
  const config = {
    // eslint-disable-next-line
    url: `${data.screens.blog.canonicalHref}/${frontMatter.slug}`,
    // eslint-disable-next-line
    identifier: frontMatter.identifier,
    // eslint-disable-next-line
    title: frontMatter.title,
  }

  return (
    <div className='o-wrapper o-wrapper--3 u-mt5'>
      <Disqus config={config} />
    </div>
  )
}
PostComments.propTypes = {
  item: articleShape.isRequired,
}

export default PostComments
