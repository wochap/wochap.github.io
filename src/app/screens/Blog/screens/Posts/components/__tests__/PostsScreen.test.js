import React from 'react'
import {shallow} from 'enzyme'
import {PostsScreen} from '../PostsScreen'

describe('PostsScreen', () => {
  const props = {
    collectionState: {
      error: 'Error',
      isPending: true,
      isFulfilled: false
    },
    collection: []
  }
  const wrapper = shallow(<PostsScreen {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('show error state', () => {
    expect(wrapper.find('.u-8/12@laptop p').text()).toEqual(`Posts Error: ${props.collectionState.error}`)
  })

  it('display pending state', () => {
    wrapper.setProps({
      collectionState: {
        error: false,
        isPending: true
      }
    })

    expect(wrapper.find('ShimmerText').length).toBeTruthy()
  })
})
