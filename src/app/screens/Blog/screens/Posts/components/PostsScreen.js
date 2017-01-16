import React from 'react'
import data from 'app/config/data'
import withCollection from 'hoc/collection/withCollection'
import * as sharedPropTypes from 'hoc/collection/sharedPropTypes'
import ScreenHelmet from 'components/ScreenHelmet'
import PostsList from './PostsList'

export function PostsScreen ({collectionState, collection}) {
  const {isPending, error} = collectionState
  const body = error ? (<p>Posts Error: {error}</p>) : (
    isPending ? (<p>Cargando posts...</p>) : (<PostsList posts={collection} />)
  )

  return (
    <section className="o-wrapper u-overflow-hidden u-mb5">
      <ScreenHelmet
        title={data.screens.blog.title}
        description={data.screens.blog.description}
        canonicalHref={data.screens.blog.canonicalHref}
      />
      <h1 className="u-hide">Blog</h1>
      <div className="o-grid o-grid--gutter-5 u-flex-row-reverse">
        <div className="o-grid__item u-12/12 u-4/12@laptop">
          {/* <img className="u-bg-primary" src="http://placehold.it/150x150" alt="Gean Carlos Bonifacio Marroquin" width="150" height="150" /> */}
          <h2 className="u-mb2 u-caps">Gean Marroquin</h2>
          <p className="u-fw-s-bold u-mb3">Sígueme @{data.twitterUser}</p>
          <p className="u-fz-sm">{data.about}</p>
        </div>
        <section className="o-grid__item u-12/12 u-8/12@laptop">
          <h2 className="u-center u-mb4 u-caps">Artículos</h2>
          {body}
        </section>
      </div>
    </section>
  )
}

PostsScreen.propTypes = {
  collectionState: sharedPropTypes.collectionState,
  collection: sharedPropTypes.collection
}

export default withCollection(PostsScreen, 'posts')
