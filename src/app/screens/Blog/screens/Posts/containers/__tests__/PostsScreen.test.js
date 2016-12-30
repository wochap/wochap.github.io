import React from 'react'
import {shallow} from 'enzyme'
import {PostsScreen} from '../PostsScreen'

describe('PostsScreen', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
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
      postsIsFulfilled: true,
      fetchPosts: () => {}
    }
    wrapper = shallow(<PostsScreen {...props} />)
  })

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render Posts component', () => {
    expect(wrapper.find('Posts').length).toBeTruthy()
  })
})
