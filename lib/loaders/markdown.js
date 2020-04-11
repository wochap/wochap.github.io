const path = require('path')
const loaderUtils = require('loader-utils')
const marked = require('marked')
const highlight = require('highlight.js')
const frontMatter = require('front-matter')
const deepMerge = require('deepmerge')
const getReadingTime = require('../reading-time')

module.exports = function (source) {
  const query = this.resourceQuery ? loaderUtils.parseQuery(this.resourceQuery) : {}
  const options = {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    langPrefix: 'hljs ',
    highlight(code, lang) {
      if (lang) {
        return highlight.highlightAuto(code, [lang]).value
      }
      return highlight.highlightAuto(code).value
    },
  }

  Object.keys(query).forEach(function (key) {
    options[key] = query[key]
  })

  const fileFullName = path.basename(this.resourcePath)
  const fileName = path.basename(this.resourcePath, path.extname(fileFullName))
  const meta = frontMatter(source)
  const body = marked(meta.body, options)
  const readingTime = getReadingTime(source)
  const formattedResult = deepMerge(
    {
      frontMatter: {
        slug: fileName,
        fileName,
        readingTime,
      },
    },
    {
      frontMatter: meta.attributes,
      bodyHtml: body,
    },
  )

  return `module.exports = ${JSON.stringify(formattedResult)}`
}

/*
Input file:

```md
---
title: Cool
date: 2016-09-01
---

# I am a title
```

Output format:

```js
module.exports = {
  frontMatter: {
    date: '2016-09-01',
    title: 'Cool',
    fileName: 'cool-file',
    slug: 'cool-file'
  },
  bodyHtml: '<h1>I am a title</h1>'
}
```
*/
