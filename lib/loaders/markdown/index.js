const path = require('path')
const frontMatter = require('front-matter')
const deepMerge = require('deepmerge')
const getReadingTime = require('../../reading-time')
const {markdownToHTML} = require('./utils')

module.exports = async function (source) {
  const callback = this.async()
  const options = {
    path: this.resourcePath,
    contents: source,
  }
  const fileFullName = path.basename(this.resourcePath)
  const fileName = path.basename(this.resourcePath, path.extname(fileFullName))
  const meta = frontMatter(source)
  const [readingTime, wordCount] = getReadingTime(source)
  const {contents: body} = await markdownToHTML(options)

  const formattedResult = deepMerge(
    {
      frontMatter: {
        slug: fileName,
        fileName,
        readingTime,
        wordCount,
      },
    },
    {
      frontMatter: meta.attributes,
      bodyHtml: body,
    },
  )
  const code = `module.exports = ${JSON.stringify(formattedResult)}`

  callback(null, code)
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
