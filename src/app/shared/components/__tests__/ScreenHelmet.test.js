import React from 'react'
import {shallow} from 'enzyme'
import ScreenHelmet from '../ScreenHelmet'

describe('ScreenHelmet', () => {
  it('render Helmet with the correct props', () => {
    const props = {
      title: 'title',
      description: 'description',
      canonicalHref: 'canonicalHref'
    }
    const expectedProps = {
      title: props.title,
      meta: [
        {
          name: 'description',
          content: props.description
        }, {
          property: 'og:title',
          content: props.title
        }, {
          property: 'og:description',
          content: props.description
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: props.canonicalHref
        }
      ]
    }
    const wrapper = shallow(<ScreenHelmet {...props} />)

    expect(wrapper.props()).toEqual(expectedProps)
  })
})
