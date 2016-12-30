import React from 'react'
import {shallow} from 'enzyme'
import Posts from '../Posts'

describe('Posts', () => {
  const props = {
    posts: [
      {
        frontMatter: {
          slug: 'titulo',
          date: '21-12-2016',
          imageUrl: 'imagen',
          title: 'titulo',
          description: 'descripcion'
        }
      }
    ],
    postsIsLoading: false,
    postsIsFulfilled: true
  }
  const wrapper = shallow(<Posts {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render post', () => {
    expect(wrapper.find('Post').length).toBeTruthy()
  })

  it('show empty list message', () => {
    wrapper.setProps({
      posts: []
    })

    expect(wrapper.find('.u-8/12@laptop').text()).toEqual('No hay artículos.')
  })

  it('show loading message', () => {
    wrapper.setProps({
      postsIsLoading: true,
      postsIsFulfilled: false
    })

    expect(wrapper.find('.u-8/12@laptop').text()).toEqual('Cargando artículos.')
  })
})
