import React from 'react'
import {connect} from 'react-redux'
import getDisplayName from 'recompose/getDisplayName'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import {getItem, getItemState, getCollectionState} from 'app/selectors/collections'
import {loadItem} from 'app/actions/collections'

function withItem(WrappedComponent, collectionName) {
  class ItemHOC extends React.Component {
    static displayName = `ItemHOC(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      params: React.PropTypes.shape({
        fileName: React.PropTypes.string.isRequired,
      }).isRequired,
      fetchItemCollection: React.PropTypes.func.isRequired,
      itemState: collectionPropTypes.stateShape,
      item: collectionPropTypes.itemShape, // eslint-disable-line
      collectionState: collectionPropTypes.stateShape, // eslint-disable-line
    }

    componentDidMount() {
      const {fetchItemCollection, params, itemState} = this.props

      if (module.hot) {
        fetchItemCollection(params.fileName)
        return
      }

      if (!itemState.isFulfilled) {
        fetchItemCollection(params.fileName)
      }
    }

    componentDidUpdate(prevProps) {
      const {fetchItemCollection, params, itemState} = this.props
      if (prevProps.params.fileName !== params.fileName) {
        if (!itemState.isFulfilled) {
          fetchItemCollection(params.fileName)
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
      item: getItem(state, collectionName, ownProps.params.fileName),
      itemState: getItemState(state, collectionName, ownProps.params.fileName),
      collectionState: getCollectionState(state, collectionName),
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchItemCollection: fileName => dispatch(loadItem(collectionName, fileName)),
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(ItemHOC)
}

export default withItem
