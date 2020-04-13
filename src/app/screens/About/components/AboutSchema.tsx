// TODO: apply i18n
import React from 'react'
import {JsonLd} from 'react-schemaorg'
// @ts-ignore
import data from 'app/config/data'
import {logo, organization, webSite, aboutWebPage, getBreadCrumList} from 'app/shared/schema'

function AboutSchema() {
  const breadCrumbList = getBreadCrumList({
    siteUrl: data.screens.about.canonicalHref,
    items: [
      {
        breadCrumbName: data.screens.about.breadCrumbName,
        siteUrl: data.screens.about.canonicalHref,
      },
    ],
  })
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      logo,
      organization,
      webSite,
      breadCrumbList,
      {
        ...aboutWebPage,
        breadcrumb: {
          '@id': breadCrumbList['@id'],
        },
      },
    ],
  }

  // @ts-ignore
  return <JsonLd item={jsonLd} />
}

export default AboutSchema
