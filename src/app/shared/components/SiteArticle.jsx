import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import {articleShape} from 'PropTypes/article'
import NotFoundScreen from 'app/screens/NotFound/components/NotFoundScreen'
import Hero from 'components/Hero'
import MarkdownBody from 'components/MarkdownBody'
import ScreenHelmet from 'components/ScreenHelmet'
import ArticleHelmet from 'components/ArticleHelmet'
import initTennor from 'lib/init-tennor'

function SiteArticle({item, itemState, collectionState, head, children}) {
  useEffect(() => {
    initTennor()
  })

  if (itemState.isFulfilled && !itemState.error) {
    return (
      <article className='u-mb5 u-overflow-hidden'>
        <ScreenHelmet
          title={item.frontMatter.title}
          description={item.frontMatter.description}
          canonicalHref={`${head.canonicalHref}/${item.frontMatter.fileName}`}
        />
        <ArticleHelmet imageUrl={item.frontMatter.imageUrl} publishedTime={item.frontMatter.date} tags={item.frontMatter.tags} />
        <Hero data={item.frontMatter} />
        <MarkdownBody html={item.bodyHtml} />
        {children}
      </article>
    )
  }

  if (collectionState.isFulfilled && !collectionState.error && !itemState.error) {
    return (
      <article className='u-mb5'>
        <Hero data={item.frontMatter} />
        {itemState.isPending && <MarkdownBody isLoading />}
      </article>
    )
  }

  if (itemState.isPending) {
    return (
      <article className='u-mb5'>
        <Hero isLoading />
        <MarkdownBody isLoading />
      </article>
    )
  }

  return <NotFoundScreen message='Artículo no encontrado' />
}

SiteArticle.propTypes = {
  children: PropTypes.element,
  item: articleShape,
  itemState: collectionPropTypes.stateShape,
  collectionState: collectionPropTypes.stateShape,
  head: PropTypes.shape({
    canonicalHref: PropTypes.string.isRequired,
  }).isRequired,
}

export default SiteArticle
