import React from 'react'

function Hero ({data}) {
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
      className="c-hero"
      style={{
        backgroundImage: `url(${data.imageUrl})`
      }}
    >
      <div className="o-wrapper">
        <h1 className="c-hero__title u-caps">{data.title}</h1>
        <p className="c-hero__date">{data.date}</p>
        {footer}
      </div>
    </header>
  )
}

Hero.propTypes = {
  data: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired
  })
}

export default Hero
