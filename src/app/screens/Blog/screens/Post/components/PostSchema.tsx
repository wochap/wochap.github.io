// TODO: apply i18n
import moment from 'moment'
import React from 'react'
import {BlogPosting} from 'schema-dts'
import {JsonLd} from 'react-schemaorg'
import data from 'app/config/data'
import {articleShape} from 'app/shared/PropTypes/article'
import {COLLECTION_DATE_FORMAT} from 'app/config/constants'

function PostSchema({item}) {
  if (!item?.state?.isFulfilled || !!item?.state?.error) {
    return null
  }

  const {frontMatter} = item
  const datePublished = moment(frontMatter.date, COLLECTION_DATE_FORMAT).format()
  const dateModified = frontMatter.dateModified ? moment(frontMatter.dateModified, COLLECTION_DATE_FORMAT).format() : datePublished

  // TODO: add 'articleBody'
  return (
    <JsonLd<BlogPosting>
      item={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'author': {
          '@type': 'Person',
          'name': data.title,
        },
        'description': frontMatter.description,
        'datePublished': datePublished,
        'headline': frontMatter.title,
        'image': frontMatter.imageUrl,
        'publisher': {
          '@type': 'Person',
          'name': data.title,
        },
        'dateModified': dateModified,
        'mainEntityOfPage': {
          '@type': 'URL',
          'category': `${data.screens.blog.canonicalHref}/${frontMatter?.slug}`,
        },
        'keywords': frontMatter.tags.join(' '),
        'inLanguage': {
          '@type': 'Language',
          'name': 'Spanish',
          'alternateName': 'es',
        },
      }}
    />
  )
}
PostSchema.propTypes = {
  item: articleShape.isRequired,
}

export default PostSchema
