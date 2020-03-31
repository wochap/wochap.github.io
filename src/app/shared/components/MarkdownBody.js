import React from 'react'
import ShimmerText from 'components/ShimmerText'

function MarkdownBody({html, isLoading = false}) {
  if (isLoading) {
    return (
      <div className='o-wrapper o-wrapper--3 u-pb5'>
        <ShimmerText>
          <span className='u-block u-pb3 u-fz-h00 u-line-height-1' aria-label='cargando'>
            Lorem
          </span>
          <span className='u-block u-pb3' aria-label='cargando'>
            Loremipsumdolorsitamet,consecteturadipisicingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.Utenimadminimveniam,quisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequat.
          </span>
          <span aria-label='cargando'>
            Duisauteiruredolorinreprehenderitinvoluptatevelitessecillumdoloreeufugiatnullapariatur.Excepteursintoccaecatcupidatatnonproident,suntinculpaquiofficiadeseruntmollitanimidestlaborum.
          </span>
        </ShimmerText>
      </div>
    )
  }

  return (
    <div
      className='o-wrapper o-wrapper--3 c-markdown-body'
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

MarkdownBody.propTypes = {
  html: React.PropTypes.string,
  isLoading: React.PropTypes.bool,
}

export default MarkdownBody
