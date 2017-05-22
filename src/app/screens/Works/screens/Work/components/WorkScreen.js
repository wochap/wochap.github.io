import React from 'react'
import data from 'app/config/data'
import withCollectionItem from 'hoc/collection/withCollectionItem'
import SiteArticle from 'components/SiteArticle' // eslint-disable-line

export function WorkScreen (props) {
  return (
    <SiteArticle
      {...props}
      head={{
        canonicalHref: data.screens.works.canonicalHref
      }}
    />
  )
}

export default withCollectionItem(WorkScreen, 'works')
