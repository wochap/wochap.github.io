import React from 'react'
import data from 'app/config/data'
import Helmet from 'react-helmet'
import Post from './Post'

function PostsScreen () {
  return (
    <section className="o-wrapper u-overflow-hidden">
      <Helmet
        title={data.screens.blog.title}
        meta={[
          {
            name: 'description',
            content: data.screens.blog.description
          }, {
            property: 'og:title',
            content: data.screens.blog.title
          }, {
            property: 'og:description',
            content: data.screens.blog.description
          }
        ]}
        link={[
          {
            rel: 'canonical',
            href: data.screens.blog.canonicalHref
          }
        ]}
      />

      <h2 className="u-hide">Blog</h2>
      <div className="o-grid o-grid--gutter-5">
        <ul className="o-grid__item u-12/12 u-8/12@laptop u-list-reset">
          <li>
            <Post />
          </li>
        </ul>
        <div className="o-grid__item u-12/12 u-4/12@laptop">
          <img className="u-bg-primary" src="http://placehold.it/150x150" alt="Gean Carlos Bonifacio Marroquin" width="150" height="150" />
          <h2 className="u-mb2 u-caps">Gean Marroquin</h2>
          <p className="u-fw-s-bold u-mb3">Sígueme @{data.twitterUser}</p>
          <p className="u-fz-sm">{data.about}</p>
        </div>
      </div>
    </section>
  )
}

export default PostsScreen
