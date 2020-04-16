---
identifier: blog-2
date: 15-04-2020
dateModified: 15-04-2020
formattedDate: Abril 2020
imageCaption: SEO posicionamiento en buscadores
imageUrl: https://res.cloudinary.com/wochap/image/upload/v1586982279/wochap/hero/seo.webp
heroImageUrl: https://res.cloudinary.com/wochap/image/upload/v1586982279/wochap/hero/seo.webp
title: ¿Comó mejorar el posicionamiento SEO de tu sitio web?
description: Aprende a mejorar el posicionamiento orgánico (SEO) de tu sitio web con las mejores practicas, ¡Hazlo ahora 😄!
tags:
  - seo
keywords:
  - seo
  - posicionamiento web
  - posicionamiento seo
  - posicionamiento organico
---

> **DISCLAIMER:** Para no hacer largo el tema no voy a ahondar mucho en cada paso, sin embargo dejare enlaces para que tú puedas profundizar más 😛.

Esta guía esta enfocada para blogs sin embargo puedes usarlo como referencia para "e-Commerces", nuestro motor de búsqueda objetivo es **Google**.

## Nuestra meta

Mejorar el puesto|ranking de tu sitio web en las búsquedas realizadas por motores de búsqueda como Google.

## Requerimientos

- Saber HTML y JSON.

## Empecemos

### Pasos para mejorar el posicionamiento seo de tu sitio web

1. #### Enviar `sitemap.xml` de tu sitio a Google

  Para ello debes registrar tu sitio web en [Search Console](https://search.google.com/search-console/about), luego dirigirte a la sección de "Sitemaps" y poner la URL de tu `sitemap.xml`, por ejemplo https://geanmarroquin.com/sitemap.xml.

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
          <loc>https://geanmarroquin.com/</loc>
      </url>
      <url>
          <loc>https://geanmarroquin.com/about</loc>
      </url>
      <url>
          <loc>https://geanmarroquin.com/blog</loc>
      </url>
      <url>
          <loc>https://geanmarroquin.com/contact</loc>
      </url>
      <url>
          <loc>https://geanmarroquin.com/blog/configurar-webpack-5</loc>
      </url>
  </urlset>
  ```

  <div class="c-markdown-image-full">
    <img src="//res.cloudinary.com/wochap/image/upload/v1586985036/wochap/body/search-console-sitemap.webp" alt="Search Console sitemap">
  </div>

  Si no tienes un archivo `sitemap.xml`, esta aplicación web https://www.xml-sitemaps.com/ lo genera por ti 😉.

  **NOTA:** otra manera de lograr que Google lea tu `sitemap.xml` es agregando su `URL` en un archivo `robots.txt`, este archivo debe ser de acceso publico y estar en la raíz de tu sitio web, por ejemplo: https://geanmarroquin.com/robots.txt

1. #### Solucionar la duplicidad de contenido

  Para ello debes agregar en cada página un `canonical link element`, por ejemplo en la página de un blog post, yo agregaría:

  ```html
  <link rel="canonical" href="https://geanmarroquin.com/blog/configurar-webpack-5">
  ```

  De esta manera cuando Google indexe `https://geanmarroquin.com/blog/configurar-webpack-5/` **nótese** el `/` al final, Google sabrá que `https://geanmarroquin.com/blog/configurar-webpack-5` y `https://geanmarroquin.com/blog/configurar-webpack-5/` son lo mismo, `canonical link element` va dentro del `<head>` de tu página html.

1. #### Sacar un excelente puntaje en [lighthouse](https://developers.google.com/web/tools/lighthouse/)

  Ello significa que tu sitio web funciona bajo `https`, es responsive (funciona bien en mobile devices), es una [PWA](https://www.xataka.com/basics/que-es-una-aplicacion-web-progresiva-o-pwa), etc.

1. #### Optimizar el contenido de tus páginas

  > Te recomiendo instalar esta extensión para chrome [meta-seo-inspector](https://www.omiod.com/meta-seo-inspector/), te ayudara a testear lo siguiente.

  1. Asegura que todas tus páginas tengan un titulo y una descripción, por ejemplo:

    ```html
    <title>Configurar webpack 5</title>
    <meta name="description" content="Aprende a configurar webpack 5 con babel.">
    ```

  1. Asegura que en cada página solo exista un solo elemento `<h1>`.

    **TIP:** Las "palabras clave" con las cuales encontraran tu sitio web en Google deben estar presente en `<title>`, `<h1>` y en el cuerpo de tu página 😉.

  1. La url de tu página debe guardar relación con `<title>` o `<h1>`

    Siguiendo los ejemplos más arriba, nuestra URL seria:

    ✅ `https://geanmarroquin.com/blog/configurar-webpack-5`<br>
    ❌ `https://geanmarroquin.com/blog/4208429152507995`

1. #### Agregar `Structured Data` a tus páginas

  > Te recomiendo usar la herramienta [Structured Data Markup Helper](https://www.google.com/webmasters/markup-helper/u/0/) de Google.

  `Structured Data` ayuda a Google a entender mejor el contenido de tu sitio web y a mostrarlo mejor 🌈🦄, existen 3 maneras de agregarlo:

  - JSON-LD (recomendado por Google)
  - Microdata
  - RDF a

  En este caso usaremos JSON-LD, para la página https://geanmarroquin.com/blog/configurar-webpack-5:

  ```html
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ImageObject",
          "@id": "https://geanmarroquin.com/#logo",
          "url": "https://res.cloudinary.com/wochap/image/upload/v1586724454/wochap/android-chrome-384x384.png",
          "caption": "Gean Marroquin",
          "width": "384px",
          "height": "384px"
        },
        {
          "@type": "Person",
          "@id": "https://geanmarroquin.com/about/#person",
          "name": "Gean Marroquin",
          "jobTitle": "JS Developer",
          "url": "https://geanmarroquin.com/about"
        },
        {
          "@type": "Organization",
          "@id": "https://geanmarroquin.com/about/#organization",
          "name": "Gean Marroquin",
          "url": "https://geanmarroquin.com",
          "logo": {"@id": "https://geanmarroquin.com/#logo"}
        },
        {
          "@type": "WebSite",
          "@id": "https://geanmarroquin.com/#website",
          "url": "https://geanmarroquin.com",
          "name": "Inicio | Gean Marroquin",
          "description": "Establecido en Peru, soy Javascript Developer enfocado en la creación de componentes escalables y reusables con vue y react, apasionado y autodidacta.",
          "publisher": {"@id": "https://geanmarroquin.com/about/#organization"}
        },
        {
          "@type": "WebPage",
          "@id": "https://geanmarroquin.com/blog/#webpage",
          "url": "https://geanmarroquin.com/blog",
          "name": "Artículos y tutoriales | Gean Marroquin",
          "description": "Tutoriales sobre desarrollo de aplicaciones web y mobile.",
          "isPartOf": {"@id": "https://geanmarroquin.com/#website"}
        },
        {
          "@type": "WebPage",
          "@id": "https://geanmarroquin.com/blog/configurar-webpack-5/#webpage",
          "url": "https://geanmarroquin.com/blog/configurar-webpack-5",
          "name": "Configurar webpack 5",
          "description": "Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!",
          "isPartOf": {"@id": "https://geanmarroquin.com/blog/#webpage"}
        },
        {
          "@type": "BlogPosting",
          "@id": "https://geanmarroquin.com/blog/configurar-webpack-5/#post",
          "url": "https://geanmarroquin.com/blog/configurar-webpack-5",
          "description": "Aprende a configurar webpack 5 con babel",
          "datePublished": "2020-04-09T00:00:00-05:00",
          "dateModified": "2020-04-12T00:00:00-05:00",
          "name": "Configurar webpack 5",
          "headline": "Configurar webpack 5",
          "keywords": "webpack, babel",
          "author": {"@id": "https://geanmarroquin.com/about/#person"},
          "publisher": {"@id": "https://geanmarroquin.com/about/#organization"},
          "image": {
            "@type": "ImageObject",
            "@id": "https://geanmarroquin.com/blog/configurar-webpack-5/#image",
            "url": "//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png",
            "caption": "webpack"
          },
          "mainEntityOfPage": {"@id": "https://geanmarroquin.com/blog/configurar-webpack-5/#webpage"}
        }
      ]
    }
  </script>
  ```

  Ya con agregar el `<script>` de arriba al `<body>` de nuestra página bastaria que nuestra pagian tenga `Structured Data`.

  Para conocer más del esquema usado, haz click [aquí](https://schema.org/docs/gs.html), y sobre como afecta `Structured Data` a tu página [aquí](https://developers.google.com/search/docs/guides/search-gallery).

<!--
#### 3. BONUS: Social media
-->

## Glosario

- **SEO**: De sus siglas en inglés Search Engine Optimization.

## Herramientas

- https://www.xml-sitemaps.com/ genera sitemap.xml a partir de tu URL.
- https://www.screamingfrog.co.uk/ sirve para inspeccionar todas tus URLs, muy bueno para encontrar links que no llevan a nada.
- https://www.omiod.com/meta-seo-inspector/ extensión de chrome para inspeccionar SEO

<!--
Agregar Breadcrumbs

FB usa Open Graph meta tags
herramienta para probar OG meta tags
https://smallseotools.com/open-graph-generator/

SEO Local con Google business
https://business.google.com/create?hl=en&gmbsrc=ww-ww-et-gs-z-gmb-s-z-h~pro-z-u

LINK BUILDING: que un blog agregue un link de tu sitio, y tu agregas un link a su facebook
https://www.google.com/alerts

Available Rich Results en Google
https://developers.google.com/search/docs/guides/search-gallery

---

Google Keyword Planner (requiere tarjeta)
https://ads.google.com/intl/es-419_co/home/tools/keyword-planner/

robots.txt generator
http://tools.seobook.com/robots-txt/generator

Google ORG admin
https://marketingplatform.google.com/home?authuser=0

Google Rich Results test BETA
https://search.google.com/test/rich-results

Google Structure Data test
https://search.google.com/structured-data/testing-tool

SEO auditoria de pago
https://seositecheckup.com/

-->
## Referencias

- https://yoast.com/rel-canonical/
- https://developers.google.com/search/docs/guides/search-gallery
