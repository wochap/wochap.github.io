import React from 'react'
import {shallow} from 'enzyme'
import Hamburger from '../Hamburger'

describe('Hamburger', () => {
  it('toggle open state', () => {
    const hamburger = shallow(<Hamburger />)

    expect(hamburger.find('.c-hamburger').hasClass('is-open')).toEqual(false)

    hamburger.setProps({
      isOpen: true,
    })

    expect(hamburger.find('.c-hamburger').hasClass('is-open')).toEqual(true)
  })

  it('let passing className', () => {
    const hamburger = shallow(<Hamburger className='one' />)

    expect(hamburger.hasClass('one')).toEqual(true)
  })
})
