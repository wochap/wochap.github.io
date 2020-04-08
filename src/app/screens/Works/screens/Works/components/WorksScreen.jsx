import React from 'react'
import data from 'app/config/data'
import ScreenHelmet from 'components/ScreenHelmet'
import Works from 'components/Works'

function WorksScreen() {
  return (
    <main>
      <ScreenHelmet
        title={data.screens.works.title}
        description={data.screens.works.description}
        canonicalHref={data.screens.works.canonicalHref}
      />
      <Works className='u-mb5' />
    </main>
  )
}

export default WorksScreen
