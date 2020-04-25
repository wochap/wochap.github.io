const vfile = require('to-vfile')
const report = require('vfile-reporter')
const unified = require('unified')
const parse = require('remark-parse')
const images = require('remark-images')
const math = require('remark-math')
const frontmatter = require('remark-frontmatter')
const externalLinks = require('remark-external-links')
const rehype = require('remark-rehype')
const raw = require('rehype-raw')
const minify = require('rehype-preset-minify')
const format = require('rehype-format')
const katex = require('rehype-katex')
const stringify = require('rehype-stringify')
const slug = require('rehype-slug')
const rehypeHighlightCodeBlock = require('@mapbox/rehype-highlight-code-block')
const highlight = require('highlight.js')
// const Prism = require('prismjs')
// const loadLanguages = require('prismjs/components/')
// loadLanguages()

function getFn() {
  return unified()
    .use(parse)
    .use(externalLinks, {target: '_blank', rel: 'nofollow'})
    .use(math)
    .use(rehype, {allowDangerousHtml: true})
    .use(format)
    .use(katex)
    .use(frontmatter, ['yaml'])
    .use(raw)
    .use(images)
    .use(slug)
    .use(rehypeHighlightCodeBlock, {
      highlight(code, lang) {
        if (lang) {
          return highlight.highlight(lang, code).value
        }
        return highlight.highlightAuto(code).value
        // if (lang) {
        //   return Prism.highlight(code, Prism.languages[lang], lang)
        // }
        // return false
      },
    })
    .use(minify)
    .use(stringify)
}

module.exports.markdownToHTML = async function markdownToHTML(options) {
  try {
    const fn = getFn()
    const file = await fn.process(vfile(options))

    console.log(report(file, {quiet: true}))
    return file.contents
  } catch (error) {
    console.error(report(error))
    return error
  }
}

module.exports.markdownToHTMLSync = function markdownToHTML(options) {
  try {
    const fn = getFn()
    const file = fn.processSync(vfile(options))

    console.log(report(file, {quiet: true}))
    return file.contents
  } catch (error) {
    console.error(report(error))
    return error
  }
}
