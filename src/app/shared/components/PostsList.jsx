import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

function PostsList({posts}) {
  const filteredPosts = posts.filter(item => !item.state?.error)
  const postsCount = filteredPosts.length

  return postsCount === 0 ? (
    <p>No hay artículos que mostrar.</p>
  ) : (
    <ul className='u-list-reset'>
      {filteredPosts.map((post, index) => (
        <li className={index === postsCount - 1 ? '' : 'u-mb4'} key={post.frontMatter.fileName}>
          <Post post={post.frontMatter} />
        </li>
      ))}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontMatter: Post.propTypes.post,
    }).isRequired,
  ).isRequired,
}

export default PostsList
