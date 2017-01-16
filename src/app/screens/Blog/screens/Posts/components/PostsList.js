import React from 'react'
import Post from './Post'

function PostsList ({posts}) {
  return posts.length === 0 ? (<p>No hay posts que mostrar.</p>) : (
    <ul className="u-list-reset">
      {posts.map((post, index) => (
        <li className={index === posts.length - 1 ? '' : 'u-mb4'} key={post.frontMatter.fileName}>
          <Post post={post.frontMatter} />
        </li>
      ))}
    </ul>
  )
}

PostsList.propTypes = {
  posts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      frontMatter: Post.propTypes.post
    }).isRequired
  ).isRequired
}

export default PostsList
