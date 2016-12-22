import React from 'react'
import data from 'app/config/data'
import Helmet from 'react-helmet'

function NotFoundScreen () {
  return (
    <div className="c-not-found-screen">
      <Helmet
        title={data.screens.notFound.title}
      />
      <h1 className="c-not-found-screen__title" data-text="404">404</h1>
      <p className="u-caps u-fz-h2 u-center">Pagina no encontrada</p>
    </div>
  )
}

export default NotFoundScreen
