import React from 'react'
import ShimmerText from 'components/ShimmerText'
import {formatDate} from 'utils/formatter'
import classNames from 'classnames'

function Hero ({
  data = {
    title: 'Cargando artículo ...',
    date: '18-06-1994'
  },
  isLoading = false
}) {
  const backgroundImage = data.imageUrl ? `url(${data.imageUrl})` : null
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
    <header
      className={classNames('c-hero', {'u-blokk-font': isLoading})}
      style={{backgroundImage}}
    >
      <div className="o-wrapper">
        <h1 className={classNames('c-hero__title', {'u-caps': !isLoading})}>
          {isLoading ? <ShimmerText text={data.title} darken /> : data.title}
        </h1>
        <p className="c-hero__date">
          {isLoading ? <ShimmerText text={formatDate(data.date)} darken /> : formatDate(data.date)}
        </p>
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
