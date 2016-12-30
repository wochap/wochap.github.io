import React from 'react'
import data from 'app/config/data'
import ScreenHelmet from 'components/ScreenHelmet'
import Post from './Post'

function Posts ({posts, postsIsLoading, postsIsFulfilled}) {
  const postsList = (
    <ul className="u-list-reset">
      {posts.map(post => (
        <li key={post.frontMatter.slug}>
          <Post post={post.frontMatter} />
        </li>
      ))}
    </ul>
  )

  return (
    <section className="o-wrapper u-overflow-hidden">
      <ScreenHelmet
        title={data.screens.blog.title}
        description={data.screens.blog.description}
        canonicalHref={data.screens.blog.canonicalHref}
      />

      <h1 className="u-hide">Blog</h1>
      <div className="o-grid o-grid--gutter-5 u-flex-row-reverse">
        <div className="o-grid__item u-12/12 u-4/12@laptop">
          <img className="u-bg-primary" src="http://placehold.it/150x150" alt="Gean Carlos Bonifacio Marroquin" width="150" height="150" />
          <h2 className="u-mb2 u-caps">Gean Marroquin</h2>
          <p className="u-fw-s-bold u-mb3">Sígueme @{data.twitterUser}</p>
          <p className="u-fz-sm">{data.about}</p>
        </div>
        <div className="o-grid__item u-12/12 u-8/12@laptop">
          {postsIsLoading ? (<p>Cargando artículos.</p>) : (
            postsIsFulfilled && posts.length > 0 ? (
              <ul className="u-list-reset">{postsList}</ul>
            ) : (<p>No hay artículos.</p>)
          )}
        </div>
      </div>
    </section>
  )
}

Posts.propTypes = {
  posts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      frontMatter: Post.propTypes.post
    })
  ),
  postsIsLoading: React.PropTypes.bool.isRequired,
  postsIsFulfilled: React.PropTypes.bool.isRequired
}

export default Posts
