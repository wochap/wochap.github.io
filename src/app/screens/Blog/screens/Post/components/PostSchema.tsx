// TODO: apply i18n
import React from 'react'
import {JsonLd} from 'react-schemaorg'
// @ts-ignore
import data from 'app/config/data'
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
} from 'app/shared/schema'
import {CollectionItem} from 'app/shared/hoc/collection/types'

interface PostSchemaProps {
  item: CollectionItem
}
function PostSchema({item}: PostSchemaProps) {
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
  // @ts-ignore
  return <JsonLd item={jsonLd} />
}

export default PostSchema
