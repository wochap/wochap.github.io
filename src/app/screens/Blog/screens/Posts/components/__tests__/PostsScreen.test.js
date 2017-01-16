import React from 'react'
import {shallow} from 'enzyme'
import {PostsScreen} from '../PostsScreen'

describe('PostsScreen', () => {
  const props = {
    collectionState: {
      error: 'Error',
      isPending: true
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

  it('show loading state', () => {
    wrapper.setProps({
      collectionState: {
        error: false
      }
    }, () => {
      expect(wrapper.find('.u-8/12@laptop').text()).toEqual('Cargando posts...')
    })
  })
})
