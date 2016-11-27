'use strict';

var loaderUtils = require('loader-utils');
var marked = require('marked');
var highlight = require('highlight.js');
var frontMatter = require('front-matter');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  var options = {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
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

  var meta = frontMatter(source);
  var body = marked(meta.body, options);
  var result = Object.assign({
    frontMatter: null,
    bodyHTML: null
  }, {
    frontMatter: meta.attributes
  }, {
    bodyHTML: body
  });

  return 'module.exports = ' + JSON.stringify(result);
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
    title: 'Cool'
  },
  bodyHTML: '<h1>I am a title</h1>'
}
```
*/
