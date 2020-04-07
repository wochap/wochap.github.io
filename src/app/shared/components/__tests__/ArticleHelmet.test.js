import React from 'react'
import {shallow} from 'enzyme'
import data from 'app/config/data'
import ArticleHelmet from '../ArticleHelmet'

describe('ArticleHelmet', () => {
  const props = {
    imageUrl: 'imageUrl',
    publishedTime: '2016-12-25',
    tags: [],
  }
  const wrapper = shallow(<ArticleHelmet {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render Helmet with the expected props', () => {
    const expectedProps = {
      defer: true,
      encodeSpecialCharacters: true,
      meta: [
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:image',
          content: props.imageUrl,
        },
        {
          property: 'article:published_time',
          content: props.publishedTime,
        },
        {
          property: 'article:author',
          content: `https://twitter.com/${data.twitterUser}`,
        },
      ],
    }

    expect(wrapper.props()).toEqual(expectedProps)
  })
})
