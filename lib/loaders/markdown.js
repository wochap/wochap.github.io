'use strict';

var path = require('path');
var loaderUtils = require('loader-utils');
var marked = require('marked');
var highlight = require('highlight.js');
var frontMatter = require('front-matter');
var deepMerge = require('deepmerge');

module.exports = function(source) {
  var query = this.resourceQuery ? loaderUtils.parseQuery(this.resourceQuery) : {};
  var options = {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    langPrefix: 'hljs ',
    highlight: function(code, lang) {
      if (lang) {
        return highlight.highlightAuto(code, [lang]).value;
      }
      return highlight.highlightAuto(code).value;
    }
  };

  Object.keys(query).forEach(function(key) {
    options[key] = query[key];
  });

  var fileFullName = path.basename(this.resourcePath);
  var fileName = path.basename(this.resourcePath, path.extname(fileFullName));
  var meta = frontMatter(source);
  var body = marked(meta.body, options);
  var formattedResult = deepMerge({
    frontMatter: {
      slug: fileName,
      fileName
    }
  }, {
    frontMatter: meta.attributes,
    bodyHtml: body
  });

  return 'module.exports = ' + JSON.stringify(formattedResult);
};

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
