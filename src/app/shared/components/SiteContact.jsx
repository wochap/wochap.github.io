import React from 'react'
import PropTypes from 'prop-types'
import ExternalLink from 'components/ExternalLink'
import data from 'app/config/data'
import t from 'app/shared/utils/t'

function SiteContact({className, id, titleTag: TitleTag = 'h2'}) {
  return (
    <section className={`o-wrapper u-center ${className}`} id={id}>
      <TitleTag className='u-mb3 u-caps u-fz-h2'>{t('Contact', 'Contáctame')}</TitleTag>
      <p className='u-mb4 u-fz-sm'>
        <span className='u-muted'>{t('Drop me a line', 'Envíame un mensaje')} </span>
        <strong>{data.email}</strong>
        <span className='u-muted'> {t('to hire me for freelance projects.', 'para trabajar juntos.')}</span>
      </p>
      <p className='u-mb5'>
        <a className='o-btn c-btn c-btn--primary' href={`mailto:${data.email}`}>
          {t('Send message', 'Enviar mensaje')}
        </a>
      </p>
      <p className='u-m0 u-fz-sm u-muted'>{t('Social links:', 'Y encuentrame en:')}</p>
      <ul className='u-list-reset u-fz-h00 u-m0'>
        <li className='u-inline-block u-p3'>
          <ExternalLink className='u-block' href='https://github.com/wochap' title='Github'>
            <i className='u-icon u-block'>github</i>
          </ExternalLink>
        </li>
        <li className='u-inline-block u-p3'>
          <ExternalLink className='u-block u-color-npm' href='https://www.npmjs.com/~wochap' title='NPM'>
            <i className='u-icon u-block'>npm</i>
          </ExternalLink>
        </li>
        <li className='u-inline-block u-p3'>
          <ExternalLink className='u-block u-color-freecodecamp' href='https://www.freecodecamp.com/wochap' title='Free code camp'>
            <i className='u-icon u-block'>freecodecamp</i>
          </ExternalLink>
        </li>
        <li className='u-inline-block u-p3'>
          <ExternalLink className='u-block' href='http://codepen.io/wochap' title='Codepen'>
            <i className='u-icon u-block'>codepen</i>
          </ExternalLink>
        </li>
        <li className='u-inline-block u-p3'>
          <ExternalLink className='u-block u-color-twitter' href={`https://twitter.com/${data.twitterUser}`} title='Twitter'>
            <i className='u-icon u-block'>twitter</i>
          </ExternalLink>
        </li>
      </ul>
    </section>
  )
}

SiteContact.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  titleTag: PropTypes.string,
}

export default SiteContact
