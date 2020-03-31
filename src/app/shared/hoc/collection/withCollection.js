import React from 'react'
import getDisplayName from 'recompose/getDisplayName'
import {connect} from 'react-redux'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import {getCollection, getCollectionState} from 'app/selectors/collections'
import {loadCollection} from 'app/actions/collections'

function withCollection(WrappedComponent, collectionName) {
  class CollectionHOC extends React.Component {
    static displayName = `CollectionHOC(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      fetchCollection: React.PropTypes.func.isRequired,
      collectionState: collectionPropTypes.stateShape,
      collection: collectionPropTypes.collectionShape, // eslint-disable-line
    }

    componentDidMount() {
      const {collectionState, fetchCollection} = this.props
      if (!collectionState.isFulfilled) {
        fetchCollection()
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      collection: getCollection(state, collectionName),
      collectionState: getCollectionState(state, collectionName),
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchCollection: () => dispatch(loadCollection(collectionName)),
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(CollectionHOC)
}

export default withCollection
