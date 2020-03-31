import React from 'react'
import {shallow} from 'enzyme'
import * as mocks from 'utils/mocks'
import Work from '../Work'

describe('Work', () => {
  const props = {
    work: mocks.collectionItem.frontMatter,
  }
  const wrapper = shallow(<Work {...props} />)

  it('render component', () => {
    expect(typeof wrapper).toEqual('object')
  })
})
