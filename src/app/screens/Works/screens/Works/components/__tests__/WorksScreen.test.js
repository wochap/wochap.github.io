import React from 'react'
import {shallow} from 'enzyme'
import {WorksScreen} from '../WorksScreen'

describe('WorksScreen', () => {
  const props = {
    collectionState: {
      error: 'Error',
      isPending: true
    },
    collection: []
  }
  const wrapper = shallow(<WorksScreen {...props} />)

  it('render component', () => {
    expect(typeof wrapper).toEqual('object')
  })
})
