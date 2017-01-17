import React from 'react'
import ShimmerText from 'components/ShimmerText'
import {formatDate} from 'utils/formatter'
import ExternalLink from 'components/ExternalLink'

function Hero ({
  data = {
    title: 'Cargando artículo ...',
    date: '18-06-1994'
  },
  isLoading = false
}) {
  const backgroundImage = data.heroImageUrl ? `url(${data.heroImageUrl})` : null
  const formattedDate = formatDate(data.date)
  const footer = data.role || data.tasks || data.siteLink ? (
    <ul className="c-hero__footer">
      {data.role && (
        <li>
          <strong>Rol: </strong>
          {data.role}
        </li>
      )}
      {data.tasks && (
        <li>
          <strong>Tareas: </strong>
          {data.tasks}
        </li>
      )}
      {data.siteLink && (
        <li>
          <strong>Sitio: </strong>
          <ExternalLink href={data.siteLink} title={data.siteLink} />
        </li>
      )}
    </ul>
  ) : null

  return (
    <header className="c-hero" style={{backgroundImage}}>
      <div className="o-wrapper c-hero__wrapper">
        {isLoading ? (
          <ShimmerText darken>
            <span className="u-block u-fz-h00 u-pb4 u-line-height-1">{data.title}</span>
            <span className="u-block u-pb6 u-line-height-1">{formattedDate}</span>
          </ShimmerText>
        ) : [
          <h1 className="c-hero__title u-caps" key="title">{data.title}</h1>,
          <p className="c-hero__date" key="date">{formattedDate}</p>
        ]}
        {footer}
      </div>
    </header>
  )
}

Hero.propTypes = {
  data: React.PropTypes.shape({
    title: React.PropTypes.string,
    date: React.PropTypes.string,
    heroImageUrl: React.PropTypes.string
  }),
  isLoading: React.PropTypes.bool
}

export default Hero
