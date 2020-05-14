import React from 'react'
import ScreenHelmet from 'components/ScreenHelmet'
import SiteContact from 'components/SiteContact'
import Works from 'components/Works'
import Posts from 'components/Posts'
import data from 'app/config/data'
import t from 'app/shared/utils/t'
import HomeSchema from './HomeSchema'

function HomeScreen() {
  return (
    <main className='c-home-screen'>
      <ScreenHelmet
        title={data.screens.home.title}
        description={data.screens.home.description}
        canonicalHref={data.screens.home.canonicalHref}
      />
      <div className='c-home-screen__hero'>
        <div className='o-wrapper u-relative'>
          <div className='c-home-screen__hero-wrapper'>
            <h1 className='u-caps'>{t("Hi!, i'm Gean Marroquin", 'Hola!, soy Gean Marroquin')}</h1>
            <div className='c-home-screen__hero-about' dangerouslySetInnerHTML={{__html: data.about}} />
            <a className='o-btn c-btn c-btn--secondary u-mr3 u-my2' href='#contact'>
              {t('Contact', 'Contáctame')}
            </a>
            <a className='o-btn c-btn c-btn--secondary c-btn--ghost u-white u-my2' href='#works'>
              {t('Works', 'Ver portafolio')}
            </a>
          </div>
        </div>
      </div>
      <Posts className='o-wrapper u-py5 u-center' id='blog' isMultiColumn />
      <Works className='u-py5 u-center' id='works' />
      <SiteContact className='u-py5' id='contact' />
      <HomeSchema />
    </main>
  )
}

export default HomeScreen
