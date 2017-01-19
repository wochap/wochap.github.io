import React from 'react'
import {shallow} from 'enzyme'
import {WorksScreen} from '../WorksScreen'

describe('WorksScreen', () => {
  const props = {
    collectionState: {
      error: 'Error',
      isPending: true,
      isFulfilled: false
    },
    collection: []
  }
  const wrapper = shallow(<WorksScreen {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
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
