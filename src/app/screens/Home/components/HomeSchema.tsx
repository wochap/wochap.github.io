import React from 'react'
import {JsonLd} from 'react-schemaorg'
import {logo, organization, webSite} from 'app/shared/schema'

function HomeSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [logo, organization, webSite],
  }

  // @ts-ignore
  return <JsonLd item={jsonLd} />
}

export default HomeSchema
