import React from 'react'
import data from 'app/config/data'
import withCollection from 'hoc/collection/withCollection'
import * as sharedPropTypes from 'hoc/collection/sharedPropTypes'
import ScreenHelmet from 'components/ScreenHelmet'
import ShimmerText from 'components/ShimmerText'
import WorksList from './WorksList'

export function WorksScreen ({collectionState, collection}) {
  const body = collectionState.error ? <p>Error: {collectionState.error}</p> : (
    collectionState.isPending ? (
      <ShimmerText block="true">
        <ul className="o-grid o-grid--gutter-3 u-list-reset">
          {[...new Array(3)].map(() => (
            <li className="o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop">
              <div className="c-work u-relative u-overflow-hidden">
                <span className="u-absolute u-left-0 u-top-0" style={{fontSize: '20rem'}} aria-label="Cargando">██</span>
              </div>
            </li>
          ))}
        </ul>
      </ShimmerText>
    ) : (
      <WorksList works={collection} />
    )
  )

  return (
    <section className="o-wrapper u-mb5">
      <ScreenHelmet
        title={data.screens.works.title}
        description={data.screens.works.description}
        canonicalHref={data.screens.works.canonicalHref}
      />
      <h2 className="u-mb3 u-caps u-center">Mis ultimos proyectos</h2>
      <p className="u-mb5 u-fz-sm u-center u-muted">Proyectos en los que trabajé.</p>
      {body}
    </section>
  )
}

WorksScreen.propTypes = {
  collectionState: sharedPropTypes.collectionState,
  collection: sharedPropTypes.collection
}

export default withCollection(WorksScreen, 'works')
