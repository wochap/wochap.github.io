import React from 'react'
import PropTypes from 'prop-types'
import SiteError from 'components/SiteError'

import data from 'app/config/data'

function NotFoundScreen({message = 'Pagina no encontrada'}) {
  return <SiteError headTitle={data.screens.notFound.title} title='404' message={message} />
}

NotFoundScreen.propTypes = {
  message: PropTypes.string,
}

export default NotFoundScreen
