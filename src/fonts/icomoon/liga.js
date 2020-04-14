/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
;(function () {
  'use strict'
  function supportsProperty(p) {
    var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
      i,
      div = document.createElement('div'),
      ret = p in div.style
    if (!ret) {
      p = p.charAt(0).toUpperCase() + p.substr(1)
      for (i = 0; i < prefixes.length; i += 1) {
        ret = prefixes[i] + p in div.style
        if (ret) {
          break
        }
      }
    }
    return ret
  }
  var icons
  if (!supportsProperty('fontFeatureSettings')) {
    icons = {
      'sun': '&#xe919;',
      'moon': '&#xe918;',
      'freecodecamp': '&#xe901;',
      'arrow_drop_down_circle': '&#xe900;',
      'facebook': '&#xea91;',
      'twitter': '&#xea96;',
      'rss': '&#xea9b;',
      'github': '&#xeab0;',
      'codepen': '&#xeae8;',
      'npm': '&#xeab1;',
      'dart': '&#xe902;',
      'firebase': '&#xe909;',
      'flutter': '&#xe903;',
      'gatsby': '&#xe90f;',
      'git': '&#xe904;',
      'graphql': '&#xe905;',
      'html5': '&#xe906;',
      'javascript': '&#xe907;',
      'jest': '&#xe908;',
      'next_js': '&#xe910;',
      'node_js': '&#xe90a;',
      'nuxt_js': '&#xe911;',
      'prettier': '&#xe912;',
      'python': '&#xe913;',
      'react': '&#xe90b;',
      'redux': '&#xe90c;',
      'sass': '&#xe90d;',
      'stylus': '&#xe917;',
      'tailwind_css': '&#xe90e;',
      'travis_ci': '&#xe914;',
      'typescript': '&#xe915;',
      'vue_js': '&#xe916;',
      '0': 0,
    }
    delete icons['0']
    window.icomoonLiga = function (els) {
      var classes, el, i, innerHTML, key
      els = els || document.getElementsByTagName('*')
      if (!els.length) {
        els = [els]
      }
      for (i = 0; ; i += 1) {
        el = els[i]
        if (!el) {
          break
        }
        classes = el.className
        if (/u-icon/.test(classes)) {
          innerHTML = el.innerHTML
          if (innerHTML && innerHTML.length > 1) {
            for (key in icons) {
              if (icons.hasOwnProperty(key)) {
                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key])
              }
            }
            el.innerHTML = innerHTML
          }
        }
      }
    }
    window.icomoonLiga()
  }
})()
