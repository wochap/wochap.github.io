const {createMacro} = require('babel-plugin-macros')
const marked = require('marked')
const highlight = require('highlight.js')
const {getReplacement} = require('babel-plugin-preval/dist/helpers')

const markedOptions = {
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

function asTag(referencePath, state, babel) {
  const {
    file: {opts: fileOpts},
  } = state
  const quasiPath = referencePath.parentPath.get('quasi')
  const markdownStr = quasiPath.parentPath.get('quasi').evaluate().value
  const html = marked(markdownStr, markedOptions)

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
