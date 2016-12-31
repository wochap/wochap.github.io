import React from 'react'
import {shallow} from 'enzyme'
import {PostScreen} from '../PostScreen'

describe('PostScreen', () => {
  const props = {
    post: {
      frontMatter: {
        slug: 'titulo',
        date: '21-12-2016',
        imageUrl: 'imagen',
        title: 'titulo',
        description: 'descripcion',
        tags: []
      },
      bodyHTML: ''
    },
    postIsLoading: false,
    postIsFulfilled: true,
    fetchPost: () => {}
  }
  const wrapper = shallow(<PostScreen {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render Post component', () => {
    expect(wrapper.find('Post').length).toBeTruthy()
  })
})
