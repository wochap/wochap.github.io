import React from 'react'
// @ts-ignore
import {ThemeToggler as ThemeTogglerRC} from 'gatsby-plugin-dark-mode'
import styled from '@emotion/styled'

const Button = styled.button`
  label: ThemeToggler;
  cursor: pointer;
  font-size: 2em;
  text-align: center;
  width: 46px;
  &:hover {
    outline: none;
  }
  color: ${props => props.color};
`

interface ThemeTogglerRCProps {
  theme: string
  toggleTheme: Function
}
interface ThemeTogglerProps {
  className: string
}
function ThemeToggler({className}: ThemeTogglerProps) {
  return (
    <ThemeTogglerRC>
      {({theme, toggleTheme}: ThemeTogglerRCProps) => {
        const isLightMode = theme !== 'dark'
        return (
          <Button
            type='button'
            className={className}
            title={isLightMode ? 'Enable Dark mode' : 'Enable Light mode'}
            color={isLightMode ? '#9eb3c6' : '#f9d401'}
            onClick={() => toggleTheme(isLightMode ? 'dark' : 'light')}
          >
            <i className='u-icon u-block'>{isLightMode ? 'moon' : 'sun'}</i>
          </Button>
        )
      }}
    </ThemeTogglerRC>
  )
}

export default ThemeToggler
