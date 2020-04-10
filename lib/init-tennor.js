const embedurl = 'https://tenor.com/embed/'

export default function () {
  const canonical = document.querySelector("link[rel='canonical']")
  const elts = document.querySelectorAll('.tenor-embed:not([data-processed]), .tenor-gif-embed:not([data-processed])')
  for (let i = 0; i < elts.length; i += 1) {
    const el = elts[i]
    el.setAttribute('data-processed', true)
    let embedSubPath = el.getAttribute('data-postid')
    if (!embedSubPath) {
      embedSubPath = el.getAttribute('data-type')
    }
    if (!embedSubPath) {
      embedSubPath = el.getAttribute('data-insights-term')
      if (embedSubPath) {
        embedSubPath = `insights/${embedSubPath.replace(/\s+/g, '-')}`
        embedSubPath += `?range=${el.getAttribute('data-range')}`
        embedSubPath += `&timestamp=${el.getAttribute('data-timestamp')}`
      }
    }

    const iframe = document.createElement('iframe')
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allowtransparency', 'true')
    iframe.setAttribute('allowfullscreen', 'true')
    iframe.setAttribute('scrolling', 'no')
    let root
    if (el.hasAttribute('data-height')) {
      iframe.setAttribute('width', el.getAttribute('data-width'))
      iframe.setAttribute('height', el.getAttribute('data-height'))
      root = iframe
    } else {
      const framewrapper = document.createElement('div')
      const aspect = el.getAttribute('data-aspect-ratio') || 1.33
      el.setAttribute('style', `width:${el.getAttribute('data-width')};position:relative;`)
      framewrapper.setAttribute('style', `padding-top:${(1 / aspect) * 100}%;`)
      iframe.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100%;')
      framewrapper.appendChild(iframe)
      root = framewrapper
    }
    let url = embedurl + embedSubPath
    const sharemethod = el.getAttribute('data-share-method') || 'tenor'
    if (sharemethod === 'host') {
      let hosturl
      if (canonical) hosturl = canonical.href
      else hosturl = document.location.href
      url += `?canonicalurl=${hosturl}`
    }
    iframe.setAttribute('src', url)
    el.innerHTML = ''
    el.appendChild(root)
  }
}
