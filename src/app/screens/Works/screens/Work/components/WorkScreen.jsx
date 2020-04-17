import React from 'react'
import data from 'app/config/data'
import withCollectionItem from 'hoc/collection/withCollectionItem'
import SiteArticle from 'components/SiteArticle'
import Helmet from 'react-helmet'

export function WorkScreen(props) {
  return (
    <>
      <SiteArticle
        {...props}
        head={{
          canonicalHref: data.screens.works.canonicalHref,
        }}
      />
      <Helmet
        meta={[
          {
            property: 'robots',
            content: 'noindex',
          },
        ]}
      />
    </>
  )
}

export default withCollectionItem(WorkScreen, 'works')
