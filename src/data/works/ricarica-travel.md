---
date: 19-05-2016
formattedDate: Mayo 2016
imageUrl: /static/images/works/ricarica-travel.png
heroImageUrl: /static/images/works/hero/ricarica-travel.jpg
title: RicaRica Travel
role: Front-end developer
siteLink: http://ricaricatravel.com/
description: "RicaRica Travel es una agencia de turismo."
tags:
  - SPA
  - i18n
  - Front-end
  - VueJS
  - Jquery
  - SASS
  - Laravel
  - Webpack
  - Noveltie
---

## Reto

Desarrollar un **SPA** con **i18n**, **carrito de compras** y **pasarela de pago**.

## Solución

**RicaRica Travel** (agencia de turismo) fue uno de los proyectos mas complejos (tanto el diseño como la funcionalidad) que me haya tocado realizar. El desarrollo se hizo bajo un marco de trabajo agil: **Scrum**.

Ya que el sitio requeria de mucha manipulacion del `DOM`, trabaje con [VueJS](https://vuejs.org/). Para manejar los datos del carrito y formularios añadí [Vuex](https://github.com/vuejs/vuex) y [vue-router](https://github.com/vuejs/vue-router) para manejar las rutas.

### Tecnologías destacadas:

* [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
* [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)
* [CSS Transitions](https://developer.mozilla.org/es/docs/Web/CSS/Transiciones_de_CSS)
* [CSS FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Workflow:

* **CSS:** [SASS](http://stylus-lang.com/), [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/), [ITCSS](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf).
* **JS:** [VueJS](https://vuejs.org/) + [vue-router](https://github.com/vuejs/vue-router) + [vuex](https://github.com/vuejs/vuex/), [Jquery](https://jquery.com/), [ES2015](https://babeljs.io/learn-es2015/), [ESLint](http://eslint.org/), [by Route hierarchy](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346).
* **Build System:** [Webpack](https://webpack.github.io/) + [Babel](https://babeljs.io/).

### Logros:

* Implementar `I18n` (internacionalización), mi primer proyecto multi idioma, logrado con [vuex](https://github.com/vuejs/vuex/).

![RicaRica Travel i18n demo](/static/images/works/body/ricarica-travel-i18n.gif)

* Crear un `SPA` (Single Page Application), hecho con [vue-router](https://github.com/vuejs/vue-router), las animaciones fueron hechas con [CSS-Transitions](http://v1.vuejs.org/guide/transitions.html#CSS-Transitions).

![RicaRica Travel spa demo](/static/images/works/body/ricarica-travel-spa.gif)

* Pasarela de pagos.

<div>
  ![RicaRica Travel pasarela de pago](/static/images/works/body/ricarica-travel-payment.jpeg)
</div>

* Aprender [VueJS](https://vuejs.org/).

## Experiencia

Otro proyecto con grandes desafios, y una vez más... la complejidad de la aplicación me llevo a reemplazar [KnockoutJS](http://knockoutjs.com/) (framework actual que usaba), por uno mucho mas robusto: [VueJS](https://vuejs.org/) (luego de revisar [React](https://facebook.github.io/react/) y  [Aurelia](http://aurelia.io/)).

Me decidi por [VueJS](https://vuejs.org/) ya que su curva de aprendizaje era bastante corta, llevaba todo lo que requeria, y ademas contaba con lo mejor de cada framework antes mencionados: **componentes**, **directivas**, **data-binding**.
