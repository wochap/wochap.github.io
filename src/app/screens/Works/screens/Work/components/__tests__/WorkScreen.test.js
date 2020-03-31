import * as mocks from 'utils/mocks'
import React from 'react'
import {shallow} from 'enzyme'
import {WorkScreen} from '../WorkScreen'

describe('WorkScreen', () => {
  const props = {
    itemState: mocks.state,
    collectionState: mocks.state,
  }
  const wrapper = shallow(<WorkScreen {...props} />)

  it('render component', () => {
    expect(typeof wrapper).toEqual('object')
  })
})
