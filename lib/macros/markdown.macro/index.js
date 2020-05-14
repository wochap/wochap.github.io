const {createMacro} = require('babel-plugin-macros')
const {getReplacement} = require('babel-plugin-preval/dist/helpers')
const {markdownToHTMLSync} = require('../markdown-to-html')

function asTag(referencePath, state, babel) {
  const {
    file: {opts: fileOpts},
  } = state
  const quasiPath = referencePath.parentPath.get('quasi')
  const markdownStr = quasiPath.parentPath.get('quasi').evaluate().value
  const html = markdownToHTMLSync({contents: markdownStr})

  quasiPath.parentPath.replaceWith(
    getReplacement({
      string: `module.exports = ${JSON.stringify(html)}`,
      fileOpts,
      babel,
    }),
  )
}

function markdown({references, state, babel}) {
  references.default.forEach(referencePath => {
    if (referencePath.parentPath.type === 'TaggedTemplateExpression') {
      asTag(referencePath, state, babel)
    } else {
      throw new Error(`markdown.macro can only be used as tagged template expression. You tried ${referencePath.parentPath.type}.`)
    }
  })
}

module.exports = createMacro(markdown)

/*
Input file:

```js
import prevalMarkdown from './markdown.macro'

const html = prevalMarkdown`
  # Pepito
`
```

Output format:

```js
const html = '<h1>Pepito</h1>'
```
*/
