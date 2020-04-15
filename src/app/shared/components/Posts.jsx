import React from 'react'
import PropTypes from 'prop-types'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import {articleShape} from 'PropTypes/article'
import withCollection from 'hoc/collection/withCollection'
import ShimmerText from 'components/ShimmerText'
import SiteError from 'components/SiteError'
import PostsList from './PostsList'

export function PostsComponent({collectionState, collection, className, id}) {
  let body

  if (collectionState.error) {
    body = <SiteError title='Ups' message={collectionState.error} invert />
  } else if (collectionState.isPending) {
    body = (
      <ul className='u-list-reset u-m0'>
        <ShimmerText themeable>
          {[...new Array(3)].map((_, index) => (
            <li className={index === 2 ? '' : 'u-pb4'} key={index}>
              <span className='u-block u-fz-lg u-line-height-1'>Loremipsum</span>
              <span className='u-block u-fz-h0 u-line-height-1'>Loremipsumdolorsitamet</span>
            </li>
          ))}
        </ShimmerText>
      </ul>
    )
  } else {
    body = <PostsList posts={collection} />
  }

  return (
    <section className={className} id={id}>
      <h2 className='u-center u-mb4 u-caps'>Artículos y tutoriales</h2>
      {body}
    </section>
  )
}

PostsComponent.propTypes = {
  collectionState: collectionPropTypes.stateShape,
  collection: PropTypes.arrayOf(articleShape).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
}

const Posts = withCollection(PostsComponent, 'posts')

export default Posts
