import React from 'react'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import articleShape from 'PropTypes/articleShape'
import NotFoundScreen from 'app/screens/NotFound/components/NotFoundScreen'
import SiteError from 'components/SiteError'
import Hero from 'components/Hero'
import MarkdownBody from 'components/MarkdownBody'
import ScreenHelmet from 'components/ScreenHelmet'
import ArticleHelmet from 'components/ArticleHelmet'

function SiteArticle ({item, itemState, collectionState, head}) {
  if (itemState.error) {
    return (
      <SiteError
        title="Error"
        message={itemState.error}
      />
    )
  }

  if (itemState.isFulfilled) {
    return (
      <article className="u-mb5">
        <ScreenHelmet
          title={item.frontMatter.title}
          description={item.frontMatter.description}
          canonicalHref={`${head.canonicalHref}/${item.frontMatter.fileName}`}
        />
        <ArticleHelmet
          imageUrl={item.frontMatter.imageUrl}
          publishedTime={item.frontMatter.date}
          tags={item.frontMatter.tags}
        />
        <Hero data={item.frontMatter} />
        <MarkdownBody html={item.bodyHtml} />
      </article>
    )
  }

  if (collectionState.isFulfilled) {
    return (
      <article className="u-mb5">
        <Hero data={item.frontMatter} />
        {itemState.isPending && <MarkdownBody isLoading />}
      </article>
    )
  }

  if (itemState.isPending) {
    return (
      <article className="u-mb5">
        <Hero isLoading />
        <MarkdownBody isLoading />
      </article>
    )
  }

  return <NotFoundScreen message={'Artículo no encontrado'} />
}

SiteArticle.propTypes = {
  item: articleShape,
  itemState: collectionPropTypes.stateShape,
  collectionState: collectionPropTypes.stateShape,
  head: React.PropTypes.shape({
    canonicalHref: React.PropTypes.string.isRequired
  }).isRequired
}

export default SiteArticle
