import React from 'react'
import {connect} from 'react-redux'
import {getItemFromCollection, isLoadingCollectionItem, isFulfilledCollectionItem} from 'app/selectors/collections'
import {loadItemFromCollection} from 'app/actions/collections'
import Post from '../components/Post'

export class PostScreen extends React.Component {
  static propTypes = {
    ...Post.propTypes,
    params: React.PropTypes.shape({
      slug: React.PropTypes.string.isRequired
    }),
    fetchPost: React.PropTypes.func.isRequired,
    post: React.PropTypes.object // eslint-disable-line
  }

  componentDidMount () {
    const isDevelopment = process.env.NODE_ENV === 'development'

    if (!this.props.postIsFulfilled || isDevelopment) {
      this.props.fetchPost(this.props.params.slug)
    }
  }

  render () {
    const {post, postIsLoading, postIsFulfilled} = this.props

    return (
      <Post post={post} postIsLoading={postIsLoading} postIsFulfilled={postIsFulfilled} />
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    post: getItemFromCollection(state, 'posts', ownProps.params.slug),
    postIsLoading: isLoadingCollectionItem(state, 'posts', ownProps.params.slug),
    postIsFulfilled: isFulfilledCollectionItem(state, 'posts', ownProps.params.slug)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPost: postSlug => dispatch(loadItemFromCollection('posts', postSlug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)
