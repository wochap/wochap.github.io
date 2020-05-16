import React from 'react'
import PropTypes from 'prop-types'
import ShimmerText from 'components/ShimmerText'
import {formatDate} from 'utils/formatter'
import ExternalLink from 'components/ExternalLink'
import t from 'app/shared/utils/t'

function Hero({
  data = {
    title: t('Blog article loading...', 'Cargando artículo ...'),
    date: '18-06-1994',
  },
  isLoading = false,
}) {
  const backgroundImage = data.heroImageUrl ? `url(${data.heroImageUrl})` : null
  const formattedDate = data.formattedDate || formatDate(data.date)
  const footer =
    data.role || data.tasks || data.siteLink || data.source ? (
      <ul className='c-hero__footer'>
        {data.role && (
          <li>
            <strong>{t('Role', 'Rol')}: </strong>
            {data.role}
          </li>
        )}
        {data.tasks && (
          <li>
            <strong>{t('Tasks', 'Tareas')}: </strong>
            {data.tasks}
          </li>
        )}
        {data.source && (
          <li>
            <strong>Source: </strong>
            <ExternalLink href={data.source} title={data.source} />
          </li>
        )}
        {data.siteLink && (
          <li>
            <strong>{t('URL', 'Sitio')}: </strong>
            <ExternalLink href={data.siteLink} title={data.siteLink} />
          </li>
        )}
      </ul>
    ) : null

  return (
    <header className='c-hero' style={{backgroundImage}}>
      <div className='o-wrapper c-hero__wrapper'>
        {isLoading ? (
          <ShimmerText darken>
            <span className='u-block u-fz-h00 u-pb4 u-line-height-1'>{data.title}</span>
            <span className='u-block u-pb6 u-line-height-1'>{formattedDate}</span>
          </ShimmerText>
        ) : (
          [
            <h1 className='c-hero__title u-caps' key='title'>
              {data.title}
            </h1>,
            <p className='c-hero__date' key='date'>
              {formattedDate}
            </p>,
            <p className='c-hero__reading-time' key='reading-time'>
              <small>{data.readingTime}</small>
            </p>,
          ]
        )}
        {footer}
      </div>
    </header>
  )
}

Hero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    heroImageUrl: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
}

export default Hero
