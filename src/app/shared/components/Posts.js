import React from 'react'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import {articleShape} from 'PropTypes/article'
import withCollection from 'hoc/collection/withCollection'
import ShimmerText from 'components/ShimmerText'
import SiteError from 'components/SiteError'
import PostsList from './PostsList'

export function Posts ({collectionState, collection, className}) {
  const body = collectionState.error ? <SiteError title="Ups" message={collectionState.error} invert /> : (
    collectionState.isPending ? (
      <ul className="u-list-reset u-m0">
        <ShimmerText>
          {[...new Array(3)].map((_, index) => (
            <li className={index === 2 ? '' : 'u-pb4'} key={index}>
              <span className="u-block u-fz-lg u-line-height-1">Loremipsum</span>
              <span className="u-block u-fz-h0 u-line-height-1">Loremipsumdolorsitamet</span>
            </li>
          ))}
        </ShimmerText>
      </ul>
    ) : (<PostsList posts={collection} />)
  )

  return (
    <section className={className}>
      <h2 className="u-center u-mb4 u-caps">Artículos</h2>
      {body}
    </section>
  )
}

Posts.propTypes = {
  collectionState: collectionPropTypes.stateShape,
  collection: React.PropTypes.arrayOf(articleShape).isRequired,
  className: React.PropTypes.string
}

export default withCollection(Posts, 'posts')
