import React from 'react'
import {connect} from 'react-redux'
import getDisplayName from 'recompose/getDisplayName'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import {getItemFromCollection, getCollectionItemState, getCollectionState} from 'app/selectors/collections'
import {loadItemFromCollection} from 'app/actions/collections'

function withItem (WrappedComponent, collectionName) {
  class ItemHOC extends React.Component {
    static displayName = `ItemHOC(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      params: React.PropTypes.shape({
        fileName: React.PropTypes.string.isRequired
      }).isRequired,
      fetchItemCollection: React.PropTypes.func.isRequired,
      itemState: collectionPropTypes.stateShape,
      item: collectionPropTypes.itemShape, // eslint-disable-line
      collectionState: collectionPropTypes.stateShape // eslint-disable-line
    }

    componentDidMount () {
      if (module.hot) {
        this.props.fetchItemCollection(this.props.params.fileName)
        return
      }

      if (!this.props.itemState.isFulfilled) {
        this.props.fetchItemCollection(this.props.params.fileName)
      }
    }

    componentDidUpdate (prevProps) {
      if (prevProps.params.fileName !== this.props.params.fileName) {
        if (!this.props.itemState.isFulfilled) {
          this.props.fetchItemCollection(this.props.params.fileName)
        }
      }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps (state, ownProps) {
    return {
      item: getItemFromCollection(state, collectionName, ownProps.params.fileName),
      itemState: getCollectionItemState(state, collectionName, ownProps.params.fileName),
      collectionState: getCollectionState(state, collectionName)
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
      fetchItemCollection: fileName => dispatch(loadItemFromCollection(collectionName, fileName))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(ItemHOC)
}

export default withItem
