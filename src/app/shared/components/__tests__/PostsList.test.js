import React from 'react'
import {shallow} from 'enzyme'
import * as mocks from 'utils/mocks'
import PostsList from '../PostsList'

describe('PostsList', () => {
  const props = {
    posts: mocks.collection,
  }
  const wrapper = shallow(<PostsList {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render post', () => {
    expect(wrapper.find('Post').length === 2).toBeTruthy()
  })

  it('show empty pending state', () => {
    wrapper.setProps({
      posts: [],
    })

    expect(wrapper.text()).toEqual('No hay artículos que mostrar.')
  })
})
