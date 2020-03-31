import React from 'react'
import {shallow} from 'enzyme'
import {PostsComponent} from '../Posts'

describe('Posts', () => {
  const props = {
    collectionState: {
      error: 'Error',
      isPending: true,
      isFulfilled: false,
    },
    collection: [],
  }
  const wrapper = shallow(<PostsComponent {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('display pending state', () => {
    wrapper.setProps({
      collectionState: {
        error: false,
        isPending: true,
        isFulfilled: false,
      },
    })

    expect(wrapper.find('ShimmerText').length).toBeTruthy()
  })
})
