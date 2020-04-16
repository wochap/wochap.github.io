const path = require('path')
const frontMatter = require('front-matter')
const deepMerge = require('deepmerge')
const getReadingTime = require('../reading-time')

module.exports = function (source) {
  const fileFullName = path.basename(this.resourcePath)
  const fileName = path.basename(this.resourcePath, path.extname(fileFullName))
  const meta = frontMatter(source)
  const [readingTime, wordCount] = getReadingTime(source)
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
```

Output format:

```js
module.exports = {
  frontMatter: {
    title: 'Cool',
    date: '2016-09-01',
    fileName: 'cool-file',
    slug: 'cool-file'
  }
}
```
*/
