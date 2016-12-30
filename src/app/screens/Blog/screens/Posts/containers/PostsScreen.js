import React from 'react'
import {connect} from 'react-redux'
import {getPosts, isLoading, isFulfilled} from 'app/selectors/posts'
import {fetchPosts} from 'app/actions/posts'
import Posts from '../components/Posts'

export class PostsScreen extends React.Component {
  static propTypes = {
    fetchPosts: React.PropTypes.func.isRequired,
    ...{Posts}.propTypes
  }

  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    const {posts, postsIsLoading, postsIsFulfilled} = this.props

    return (
      <Posts posts={posts} postsIsLoading={postsIsLoading} postsIsFulfilled={postsIsFulfilled} />
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: getPosts(state),
    postsIsLoading: isLoading(state),
    postsIsFulfilled: isFulfilled(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen)
