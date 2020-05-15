import React from 'react'
import t from '../utils/t'

function SiteFooter() {
  return (
    <footer className='o-wrapper u-py3 u-mt-auto'>
      <p className='u-center u-m0 u-muted u-fz-xs'>
        {t('Designed with', 'Diseñado con')} <span className='u-fz-xl u-red'>&hearts;</span> {t('by ', 'por ')}
        <a href='https://site.uplabs.com/alisaayeed' target='_blank' rel='noopener noreferrer'>
          <strong>Ali Sayed</strong>
        </a>
      </p>
    </footer>
  )
}

export default SiteFooter
