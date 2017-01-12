import React from 'react'
import {connect} from 'react-redux'
import {getCollection, isLoadingCollection, isFulfilledCollection} from 'app/selectors/collections'
import {loadItemsFromCollection} from 'app/actions/collections'
import Posts from '../components/Posts'

export class PostsScreen extends React.Component {
  static propTypes = {
    fetchPosts: React.PropTypes.func.isRequired,
    ...Posts.propTypes
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
    posts: getCollection(state, 'posts'),
    postsIsLoading: isLoadingCollection(state, 'posts'),
    postsIsFulfilled: isFulfilledCollection(state, 'posts')
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(loadItemsFromCollection('posts'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen)
