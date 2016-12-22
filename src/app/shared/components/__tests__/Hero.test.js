import React from 'react'
import {shallow} from 'enzyme'
import Hero from '../Hero'

describe('Hero', () => {
  it('render component', () => {
    const wrapper = shallow(
      <Hero
        data={{
          title: 'yey',
          date: '16-12-16',
          imageUrl: 'fakeUrl'
        }}
      />
    )

    expect(typeof wrapper).toEqual('object')
  })
})
