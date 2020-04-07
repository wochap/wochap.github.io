import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import getDisplayName from 'recompose/getDisplayName'
import * as collectionPropTypes from 'hoc/collection/PropTypes'
import {getItem, getItemState, getCollectionState} from 'app/selectors/collections'
import {loadItem} from 'app/actions/collections'

function withItem(WrappedComponent, collectionName) {
  class ItemHOC extends React.Component {
    static displayName = `ItemHOC(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          fileName: PropTypes.string.isRequired,
        }),
      }).isRequired,
      fetchItemCollection: PropTypes.func.isRequired,
      itemState: collectionPropTypes.stateShape,
      item: collectionPropTypes.itemShape, // eslint-disable-line
      collectionState: collectionPropTypes.stateShape, // eslint-disable-line
    }

    componentDidMount() {
      const {fetchItemCollection, match, itemState} = this.props
      const {params} = match

      if (module.hot) {
        fetchItemCollection(params.fileName)
        return
      }

      if (!itemState.isFulfilled) {
        fetchItemCollection(params.fileName)
      }
    }

    componentDidUpdate(prevProps) {
      const {fetchItemCollection, match, itemState} = this.props
      const {params} = match
      if (prevProps.match.params.fileName !== params.fileName) {
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
    const {match} = ownProps
    return {
      item: getItem(state, collectionName, match.params.fileName),
      itemState: getItemState(state, collectionName, match.params.fileName),
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
