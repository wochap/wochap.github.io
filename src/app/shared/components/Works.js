import React from 'react'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import {articleShape} from 'PropTypes/article'
import withCollection from 'hoc/collection/withCollection'
import ShimmerText from 'components/ShimmerText'
import SiteError from 'components/SiteError'
import WorksList from './WorksList'

export function WorksComponent({collectionState, collection, className, id}) {
  let body
  if (collectionState.error) {
    body = <SiteError title='Ups' message={collectionState.error} />
  } else if (collectionState.isPending) {
    body = (
      <ShimmerText block>
        <ul className='o-grid o-grid--gutter-3 u-list-reset'>
          {[...new Array(3)].map((_, index) => (
            <li className='o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop' key={index}>
              <div className='c-work u-relative u-overflow-hidden'>
                <span className='u-absolute u-left-0 u-top-0' style={{fontSize: '20rem'}} aria-label='Cargando'>
                  ██
                </span>
              </div>
            </li>
          ))}
        </ul>
      </ShimmerText>
    )
  } else {
    body = <WorksList works={collection} />
  }

  return (
    <section className={`o-wrapper ${className}`} id={id}>
      <h2 className='u-mb3 u-caps u-center'>Portafolio</h2>
      <p className='u-mb5 u-fz-sm u-center u-muted'>Proyectos personales, freelance y como colaborador Front-End</p>
      {body}
    </section>
  )
}

WorksComponent.propTypes = {
  collectionState: collectionPropTypes.stateShape,
  collection: React.PropTypes.arrayOf(articleShape).isRequired,
  className: React.PropTypes.string,
  id: React.PropTypes.string,
}

const Works = withCollection(WorksComponent, 'works')

export default Works
