import React from 'react'
import {connect} from 'react-redux'
import {getPost, isLoading, isFulfilled} from 'app/selectors/posts'
import {fetchPost} from 'app/actions/posts'
import Post from '../components/Post'

export class PostScreen extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      slug: React.PropTypes.string.isRequired
    }),
    fetchPost: React.PropTypes.func.isRequired,
    ...Post.propTypes
  }

  componentDidMount () {
    this.props.fetchPost(this.props.params.slug)
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
    post: getPost(state, ownProps.params.slug),
    postIsLoading: isLoading(state),
    postIsFulfilled: isFulfilled(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPost: postSlug => dispatch(fetchPost(postSlug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)
