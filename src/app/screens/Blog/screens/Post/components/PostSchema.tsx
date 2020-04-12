// TODO: apply i18n
import React from 'react'
import {BlogPosting} from 'schema-dts'
import {JsonLd} from 'react-schemaorg'
import data from 'app/config/data'
import {articleShape} from 'app/shared/PropTypes/article'
import {
  logo,
  person,
  organization,
  webSite,
  blogWebPage,
  blogWebPageId,
  getCollectionItemWebPage,
  getCollectionItemBlogPosting,
  getBreadCrumList,
} from './schema'

function PostSchema({item}) {
  if (!item?.state?.isFulfilled || !!item?.state?.error) {
    return null
  }

  const {frontMatter} = item
  const postUrl = `${data.screens.blog.canonicalHref}/${frontMatter.slug}`
  const blogPosting = getCollectionItemBlogPosting({
    screenKey: 'blog',
    parentId: blogWebPageId,
    frontMatter,
  })
  const itemWebPage = getCollectionItemWebPage({
    siteUrl: postUrl,
    parentId: blogWebPageId,
    title: frontMatter.title,
    description: frontMatter.description,
  })
  const breadCrumbList = getBreadCrumList({
    siteUrl: postUrl,
    items: [
      {
        breadCrumbName: data.screens.blog.breadCrumbName,
        siteUrl: data.screens.blog.canonicalHref,
      },
      {
        breadCrumbName: frontMatter.title,
        siteUrl: postUrl,
      },
    ],
  })
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      logo,
      person,
      organization,
      webSite,
      blogWebPage,
      breadCrumbList,
      {
        ...itemWebPage,
        breadcrumb: {
          '@id': breadCrumbList['@id'],
        },
      },
      blogPosting,
    ],
  }

  // TODO: add 'articleBody' schema property
  return <JsonLd<BlogPosting> item={jsonLd} />
}
PostSchema.propTypes = {
  item: articleShape.isRequired,
}

export default PostSchema
