import React from 'react'
import ScreenHelmet from 'components/ScreenHelmet'
import AlternateHelmet from 'components/AlternateHelmet'
import SiteContact from 'components/SiteContact'

import data from 'app/config/data'

function ContactScreen() {
  return (
    <main>
      <ScreenHelmet
        title={data.screens.contact.title}
        description={data.screens.contact.description}
        canonicalHref={data.screens.contact.canonicalHref}
      />
      <AlternateHelmet canonicalHref={data.screens.contact.canonicalHref} />
      <SiteContact className='u-mb5' titleTag='h1' />
    </main>
  )
}

export default ContactScreen
