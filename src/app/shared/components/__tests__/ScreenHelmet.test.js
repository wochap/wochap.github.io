import React from 'react'
import {shallow} from 'enzyme'
import ScreenHelmet from '../ScreenHelmet'

describe('ScreenHelmet', () => {
  const props = {
    title: 'title',
    description: 'description',
    canonicalHref: 'canonicalHref',
  }
  const wrapper = shallow(<ScreenHelmet {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render Helmet with the correct props', () => {
    const expectedProps = {
      defer: true,
      encodeSpecialCharacters: true,
      title: props.title,
      meta: [
        {
          name: 'description',
          content: props.description,
        },
        {
          property: 'og:title',
          content: props.title,
        },
        {
          property: 'og:description',
          content: props.description,
        },
        {
          content: 'canonicalHref',
          property: 'og:url ',
        },
        {
          content: 'summary_large_image',
          property: 'twitter:card',
        },
        {
          content: '@geanmarroquin',
          property: 'twitter:site',
        },
        {
          content: 'title',
          property: 'twitter:title',
        },
        {
          content: 'description',
          property: 'twitter:description',
        },
        {
          content: '@geanmarroquin',
          property: 'twitter:creator',
        },
        {
          content: 'canonicalHref',
          property: 'twitter:domain ',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: props.canonicalHref,
        },
      ],
    }

    expect(wrapper.props()).toEqual(expectedProps)
  })
})
