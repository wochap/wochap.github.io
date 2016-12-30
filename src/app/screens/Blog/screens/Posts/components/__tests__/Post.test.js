import React from 'react'
import {shallow} from 'enzyme'
import {formatDate} from 'utils/formatter'
import Post from '../Post'

describe('Post', () => {
  const props = {
    post: {
      slug: 'slug',
      date: 'date',
      imageUrl: 'imageUrl',
      title: 'title',
      description: 'description'
    }
  }
  const wrapper = shallow(<Post {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render formatted date', () => {
    const formattedDate = formatDate(props.post.date)

    expect(wrapper.find('.c-post__date').text()).toEqual(formattedDate)
  })

  it('render title', () => {
    expect(wrapper.find('.c-post__title').render().text()).toEqual(props.post.title)
  })

  it('render description', () => {
    expect(wrapper.find('.c-post__description').text()).toEqual(props.post.description)
  })
})
