---
date: 12-01-2017
formattedDate: Enero 2017
imageUrl: /static/images/works/gean-marroquin.png
title: Gean Marroquin
role: Front-end developer
siteLink: https://geanmarroquin.com/
description: "Mi sitio personal."
tags:
  - PWA
  - SPA
  - SSR
  - Unit testing
  - Offline first
  - Static web site
  - Javascript
  - SASS
  - Webpack
  - Personal
---

¿Cual es la mejor manera de aprender algo? poniendolo en practica, es por eso que me propuse a crear algo que me permitiera demostrar mis habilidades y a la vez practicar lo aprendido. Entre las cosas que queria demostrar:

* [Offline first](https://www.youtube.com/watch?v=IIRj8DftkqE).
* [Code splitting](https://www.youtube.com/watch?v=QH94CXVv3UE).
* TDD.
* Manejo asincrono en javascript.

## Reto

Crear mi sitio personal, sin un servidor para poder subirlo a [GH Pages](https://pages.github.com/), y permitirme tener contenido dinamico (portafolio, blog) .

## Solución

Despues de investigar, y habiendome inspirado de proyectos que ya lograban lo que me proponia:

* [Gatsby](https://github.com/gatsbyjs/gatsby)
* [Phenomic](https://phenomic.io/)

Llege a la conclusion que las mejores herramientas para este trabajo eran [Webpack](https://webpack.github.io/) con [React](https://facebook.github.io/react/) o [VueJS](https://vuejs.org/), asi que realize demos con ambos frameworks para elegir cual era el mas conveniente:

* [vue-static-blog](https://github.com/wochap/vue-static-blog)
* [webpack-react-static-boilerplate](https://github.com/wochap/webpack-react-static-boilerplate/tree/redux)

Me decidi por [React](https://facebook.github.io/react/) porque no tenia un proyecto que mostrar con el, el [diseño](https://assets.materialup.com/uploads/d8f0a829-a3ff-4174-ac7e-d8021904463b/attachment.jpg) lo encontre en [Up Labs](https://site.uplabs.com/).

Con todo en orden, comenze por maquetar el diseño, luego cree las pruebas y los componentes; añadí la configuracion necesaria para pre renderizar (con [static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin)) las rutas de mi aplicacion, una vez que todo funcionaba añadi [redux](https://github.com/reactjs/redux) y refactorize, y refactorize y ...ahora me encuentro añadiendo trabajos a mi portafolio y pronto articulos.

## Tecnologías destacadas:

* [Service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
* [JSONP](https://es.wikipedia.org/wiki/JSONP)
* [CSS FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Workflow:

* **CSS:** [SASS](http://stylus-lang.com/), [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/), [ITCSS](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf), [WOCSS](https://github.com/wocss).
* **JS:** [React](https://facebook.github.io/react/) + [React router v3](https://github.com/ReactTraining/react-router) + [Redux](http://redux.js.org/), [ES2017](http://www.2ality.com/2016/02/ecmascript-2017.html), [ESLint](http://eslint.org/), [Jest](https://facebook.github.io/jest/) + [Enzyme](https://github.com/airbnb/enzyme), [by Route hierarchy](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346).
* **Build System:** [Webpack](https://webpack.github.io/) + [Babel](https://babeljs.io/) + [custom-loaders](https://github.com/wochap/wochap.github.io/tree/dev/build/webpack/loaders) + [sw-precache](https://github.com/GoogleChrome/sw-precache).

## Logros:

* Crear loaders propios en [Webpack](https://webpack.github.io/).
* **Optimistic updates**.
* El sitio no necesita cargar los scripts para que puedas navegar por el, gracias a que todas las paginas son generadas por [Webpack](https://webpack.github.io/) y [React](https://facebook.github.io/react/).
