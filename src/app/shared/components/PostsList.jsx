import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Post from './Post'

const Ul = styled.ul`
  label: PostList;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  grid-template-columns: ${props => (props.isMultiColumn ? 'repeat(auto-fill, minmax(300px, 400px))' : 'none')};
  justify-content: ${props => (props.isMultiColumn ? 'center' : 'left')};

  .WebKit &,
  .Blink &,
  .Gecko & {
    display: grid;
    text-align: left;
  }
`
const Li = styled.li`
  label: PostList__item;
  margin-bottom: 2rem;

  .WebKit &,
  .Blink &,
  .Gecko & {
    margin-bottom: 0;
  }
`

function PostsList({posts, isMultiColumn = false}) {
  const filteredPosts = posts.filter(item => !item.state?.error)
  const postsCount = filteredPosts.length

  return postsCount === 0 ? (
    <p>No hay artículos que mostrar.</p>
  ) : (
    <Ul isMultiColumn={isMultiColumn}>
      {filteredPosts.map(post => (
        <Li key={post.frontMatter.fileName}>
          <Post post={post.frontMatter} />
        </Li>
      ))}
    </Ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontMatter: Post.propTypes.post,
    }).isRequired,
  ).isRequired,
  isMultiColumn: PropTypes.bool,
}

export default PostsList
