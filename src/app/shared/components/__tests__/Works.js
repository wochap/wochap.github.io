import React from 'react'
import {shallow} from 'enzyme'
import {Works} from '../Works'

describe('Works', () => {
  const props = {
    collectionState: {
      error: 'Error',
      isPending: true,
      isFulfilled: false
    },
    collection: []
  }
  const wrapper = shallow(<Works {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('display error state', () => {
    expect(wrapper.find('SiteError').length).toBeTruthy()
  })

  it('display pending state', () => {
    wrapper.setProps({
      collectionState: {
        error: false,
        isPending: true,
        isFulfilled: false
      }
    })

    expect(wrapper.find('ShimmerText').length).toBeTruthy()
  })
})
