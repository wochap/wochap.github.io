import React from 'react'
// import styled from '@emotion/styled'
import t from 'app/shared/utils/t'
import {BASE_URL_EN, BASE_URL_ES} from 'app/config/data'

// const Button = styled.button`
//   cursor: pointer;
//   font-size: 2em;
//   text-align: center;
//   &:hover {
//     outline: none;
//   }
// `

interface LangTogglerProps {
  className: string
}
function LangToggler({className}: LangTogglerProps) {
  return (
    <a className={className} href={t(BASE_URL_ES, BASE_URL_EN)} title={t('Cambiar a español', 'Change to english')}>
      {t('ES', 'EN')}
    </a>
  )
}

export default LangToggler
