import React from 'react'
import ShimmerText from 'components/ShimmerText'
import {formatDate} from 'utils/formatter'

function Hero ({
  data = {
    title: 'Cargando artículo ...',
    date: '18-06-1994'
  },
  isLoading = false
}) {
  const backgroundImage = data.imageUrl ? `url(${data.imageUrl})` : null
  const formattedDate = formatDate(data.date)
  const footer = data.role || data.tasks || data.site ? (
    <ul className="c-hero__footer">
      {data.role && (
        <li>
          <strong>Role: </strong>
          {data.role}
        </li>
      )}
      {data.tasks && (
        <li>
          <strong>Tasks: </strong>
          {data.tasks}
        </li>
      )}
      {data.site && (
        <li>
          <strong>Site: </strong>
          <a href="#!">{data.link}</a>
        </li>
      )}
    </ul>
  ) : null

  return (
    <header className="c-hero" style={{backgroundImage}}>
      <div className="o-wrapper">
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
    imageUrl: React.PropTypes.string
  }),
  isLoading: React.PropTypes.bool
}

export default Hero
