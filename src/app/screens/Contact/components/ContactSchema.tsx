import React from 'react'
import {JsonLd} from 'react-schemaorg'
// @ts-ignore
import data from 'app/config/data'
import {logo, organization, webSite, contactWebPage, getBreadCrumList} from 'app/shared/schema'

function ContactSchema() {
  const breadCrumbList = getBreadCrumList({
    siteUrl: data.screens.contact.canonicalHref,
    items: [
      {
        breadCrumbName: data.screens.contact.breadCrumbName,
        siteUrl: data.screens.contact.canonicalHref,
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
        ...contactWebPage,
        breadcrumb: {
          '@id': breadCrumbList['@id'],
        },
      },
    ],
  }

  // @ts-ignore
  return <JsonLd item={jsonLd} />
}

export default ContactSchema
