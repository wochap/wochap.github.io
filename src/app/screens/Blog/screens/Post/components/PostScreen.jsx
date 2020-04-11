import React from 'react'
import data from 'app/config/data'
import withCollectionItem from 'hoc/collection/withCollectionItem'
import SiteArticle from 'components/SiteArticle'
import Disqus from 'gatsby-plugin-disqus/components/Disqus'

export function PostScreen(props) {
  return (
    <SiteArticle
      {...props}
      head={{
        canonicalHref: data.screens.blog.canonicalHref,
      }}
    >
      <div className='o-wrapper o-wrapper--3 u-mt5'>
        <Disqus
          config={{
            // eslint-disable-next-line
            url: `${data.screens.blog.canonicalHref}/${props.item?.frontMatter?.slug}`,
            // eslint-disable-next-line
            identifier: props.item?.frontMatter?.identifier,
            // eslint-disable-next-line
            title: props.item?.frontMatter?.title,
          }}
        />
      </div>
    </SiteArticle>
  )
}

export default withCollectionItem(PostScreen, 'posts')
