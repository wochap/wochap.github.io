'use strict';

var frontMatter = require('front-matter');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var meta = frontMatter(source);

  return 'module.exports = ' + JSON.stringify(meta.attributes);
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
  title: 'Cool',
  date: '2016-09-01'
}
```
*/
