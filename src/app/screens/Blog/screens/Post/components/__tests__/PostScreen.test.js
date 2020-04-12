import * as mocks from 'utils/mocks'
import React from 'react'
import {shallow} from 'enzyme'
import {PostScreen} from '../PostScreen'

describe('PostScreen', () => {
  const props = {
    item: mocks.collectionItem,
    itemState: mocks.state,
    collectionState: mocks.state,
  }
  const wrapper = shallow(<PostScreen {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })
})
