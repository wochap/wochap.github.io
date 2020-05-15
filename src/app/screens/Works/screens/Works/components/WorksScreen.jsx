import React from 'react'
import data from 'app/config/data'
import ScreenHelmet from 'components/ScreenHelmet'
import AlternateHelmet from 'components/AlternateHelmet'
import Works from 'components/Works'

function WorksScreen() {
  return (
    <main>
      <ScreenHelmet
        title={data.screens.works.title}
        description={data.screens.works.description}
        canonicalHref={data.screens.works.canonicalHref}
      />
      <AlternateHelmet canonicalHref={data.screens.works.canonicalHref} />
      <Works className='u-mb5' titleTag='h1' workTitleTag='h2' />
    </main>
  )
}

export default WorksScreen
