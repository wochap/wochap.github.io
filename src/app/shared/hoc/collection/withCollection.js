import React from 'react'
import getDisplayName from 'recompose/getDisplayName'
import {connect} from 'react-redux'
import {getCollection, getCollectionState} from 'app/selectors/collections'
import {loadItemsFromCollection} from 'app/actions/collections'
import * as sharedPropTypes from './sharedPropTypes'

function withCollection (WrappedComponent, collectionName) {
  class CollectionHOC extends React.Component {
    static displayName = `CollectionHOC(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      fetchCollection: React.PropTypes.func.isRequired,
      collectionState: sharedPropTypes.collectionState,
      collection: sharedPropTypes.collection // eslint-disable-line
    }

    componentDidMount () {
      if (!this.props.collectionState.isFulfilled) {
        this.props.fetchCollection()
      }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    return {
      collection: getCollection(state, collectionName),
      collectionState: getCollectionState(state, collectionName)
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
      fetchCollection: () => dispatch(loadItemsFromCollection(collectionName))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(CollectionHOC)
}

export default withCollection
