import React from 'react'
import Helmet from 'react-helmet'

function HomeScreen () {
  return (
    <div>
      <Helmet
        title="Gean Carlos Bonifacio Marroquin"
        meta={[
          {
            name: 'description',
            content: 'Desarrollador Front-end'
          }, {
            property: 'og:title',
            content: 'Gean Carlos Bonifacio Marroquin'
          }, {
            property: 'og:description',
            content: 'Desarrollador Front-end'
          }
        ]}
        link={[
          {
            rel: 'canonical',
            href: 'https://geanmarroquin.com'
          }
        ]}
      />
      <h1>Home</h1>
    </div>
  )
}

export default HomeScreen
