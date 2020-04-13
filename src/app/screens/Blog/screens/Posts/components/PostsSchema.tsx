// TODO: apply i18n
import React from 'react'
import {JsonLd} from 'react-schemaorg'
// @ts-ignore
import data from 'app/config/data'
// @ts-ignore
import withCollection from 'app/shared/hoc/collection/withCollection'
import {
  logo,
  person,
  organization,
  webSite,
  blogWebPageId,
  blogWebPage,
  getBreadCrumList,
  getCollectionItemBlogPosting,
} from 'app/shared/schema'
import {CollectionItem, State} from 'app/shared/hoc/collection/types'
import {BlogPosting} from 'schema-dts'

interface PostsSchemaProps {
  collectionState: State
  collection: CollectionItem[]
}
function PostsSchema({collectionState, collection}: PostsSchemaProps) {
  if (collectionState.error || !collectionState.isFulfilled) {
    return null
  }
  const breadCrumbList = getBreadCrumList({
    siteUrl: data.screens.blog.canonicalHref,
    items: [
      {
        breadCrumbName: data.screens.blog.breadCrumbName,
        siteUrl: data.screens.blog.canonicalHref,
      },
    ],
  })
  const postsSchemas = collection
    .filter(post => !post.state?.error)
    .map(
      (collectionItem: CollectionItem): BlogPosting => {
        const {frontMatter} = collectionItem
        const blogPosting = getCollectionItemBlogPosting({
          screenKey: 'blog',
          parentId: blogWebPageId,
          frontMatter,
        })
        return blogPosting
      },
    )
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      logo,
      person,
      organization,
      webSite,
      breadCrumbList,
      {
        ...blogWebPage,
        breadcrumb: {
          '@id': breadCrumbList['@id'],
        },
      },
      ...postsSchemas,
    ],
  }

  // @ts-ignore
  return <JsonLd item={jsonLd} />
}

export default withCollection(PostsSchema, 'posts')
