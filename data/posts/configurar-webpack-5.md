---
identifier: blog-1
date: 09-04-2020
dateModified: 12-04-2020
formattedDate: Abril 2020
imageCaption: webpack
imageUrl: //res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png
heroImageUrl: //res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png
title: Configurar webpack 5
description: Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!
tags:
  - webpack
  - babel
---

Configurar webpack puede ser frustante...

<div class="tenor-gif-embed" data-postid="5384575" data-share-method="host" data-width="100%" data-aspect-ratio="1.7785714285714287"><a href="https://tenor.com/view/fuck-work-gif-5384575">Fuckwork Angry GIF</a> from <a href="https://tenor.com/search/fuckwork-gifs">Fuckwork GIFs</a></div>
<br>

Por ello en esta guia te enseñare como configurar [webpack 5](https://webpack.js.org/concepts/) con babel, si deseas ver la configuracion final haz click [aqui](#configuracion-final) y [aqui](https://github.com/wochap/setup-webpack-5) para ir al repo.

> al dia de hoy (9 de abril del 2020) [HMR (hot module replacement)](https://webpack.js.org/concepts/hot-module-replacement/) no funciona con **html-webpack-plugin**, y tambien hay algunos plugins que no funcionaran (por el momento) ya que la API interna cambio bastante en webpack 5

## Nuestra meta

Tener un solo archivo de configuracion `webpack.config.js` para `production` y `development`, configurar [babel](https://babeljs.io/) para que inserte [polyfills](https://developer.mozilla.org/es/docs/Glossary/Polyfill) y transforme nuestro codigo JS a JS que entiendan nuestros `target browsers`.

## Requerimientos

- Saber lo basico de [NodeJS](https://nodejs.org/).

## Empezemos

#### 1. Instalar dependencias

Webpack

- webpack - v5.0.0-beta.13
- webpack-cli - v3.3.11 - _permite usar webpack en la terminal_
- webpack-dev-server - v3.10.3 - _crea un servidor express para poder hacer uso de HMR_

Webpack loaders

- css-loader - v3.4.2 - _permite importar archivos CSS a nuestros JS_
- postcss-loader - v3.0.0 - _permite aplicar plugins de [postcss](https://postcss.org/) a nuestros CSS_
- style-loader - v1.1.3 - _agrega una etiqueta `style` en el DOM por cada CSS que importemos en nuestros JS_
- babel-loader - v8.1.0 - _permite aplicar babel a todos nuestros JS_

Webpack plugins

- clean-webpack-plugin - v3.0.0 - _eliminara la carpeta dist en cada production build_
- html-webpack-plugin - v4.0.4 - _inserta en el archivo html que le indiques todos tus imports (script, style, link, etc)_
- mini-css-extract-plugin - v0.9.0 - _agrega una etiqueta `link` en el DOM por cada CSS que importemos en nuestros JS_

Babel

- @babel/core - v7.9.0
- @babel/plugin-transform-runtime - v7.9.0 - _encargado de agregar los polyfills_
- @babel/preset-env - v7.9.0 - _encargado de transformar nuestro codigo JS a JS entendible por nuestros `target browsers`_
- @babel/runtime-corejs3 - v7.9.2 - _modulo que contiene los polyfills_

Postcss plugins

- autoprefixer - v9.7.5 - _insertara prefijos (-webkit-) segun lo requieran nuestros `target browsers`_

#### 2. Agregar nuestros tasks en package.json

En development, usaremos el comando `npm run dev` y para production `npm run build`.

```json
{
  "scripts": {
    "build": "webpack --mode production", // corre webpack con la configuracion para production, con ello webpack sera capaz de analizar, comprimir, y quitar codigo innecesario.
    "dev": "webpack-dev-server --mode development" // para hacer uso del famoso HMR necesitamos un servidor en nodejs, webpack-dev-server lo creara por nosotros
  }
}
```

#### 3. Crear nuestro archivo [`.browserslistrc`](https://github.com/browserslist/browserslist#browserslist-)

En este archivo indicamos nuestros `target browsers`, los navegadores que soportaremos. [Babel](https://babeljs.io/docs/en/babel-preset-env) y [Autoprefixer](https://autoprefixer.github.io/) usaran este archivo si lo encuentran en la raiz del proyecto.

```
# .browserslistrc

> 1%
last 2 versions
not dead
not IE 11
not IE 10
```

#### 4. Crear nuestro archivo `.babelrc`

Con esto babel sera capaz de insertar polyfills y transformar JS donde se requiera segun nuestro `target browsers`.

```json
{
  "presets": [["@babel/preset-env"]],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}
```

#### 5. Crear nuestro archivo `postcss.config.js`

`postcss-loader` usara esta configuracion, solo usaremos el plugin de autoprefixer.

```js
module.exports = {
    plugins: {
        "autoprefixer": {},
    },
};
```

#### 6. Crear nuestro archivo `webpack.config.js`

<div class="tenor-gif-embed" data-postid="10383696" data-share-method="host" data-width="100%" data-aspect-ratio="1.7744360902255638"><a href="https://tenor.com/view/ahora-si-viene-lo-chido-gif-10383696">Ahora Si GIF</a> from <a href="https://tenor.com/search/ahora-gifs">Ahora GIFs</a></div>
<br>

Empezemos por importar algunos modulos, mas [arriba](#1-instalar-dependencias) explique que hace cada modulo.

```js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
```

El archivo `webpack.config.js` debe exportar un objeto o una funcion devolviendo un objeto, usaremos la segunda, ya que de esta manera podremos saber si estamos en `development` o `production`.

```js
const config = {}
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // TODO: usar style-loader, es lo recomendado para usar HMR
    // TODO: habilitar HMR plugin
  }

  if (argv.mode === 'production') {
    // TODO: insertar `contenthash` en los archivos de salida, esto para tener `long term caching`
    // TODO: usar MiniCssExtractPlugin, para extraer todo nuestro CSS a un archivo CSS, de lo contrario nuestro CSS quedaria en los archivos JS
  }
  return config
}
```

La configuracion en comun que tiene `production` y `development` estara en el objeto `config`.

```js
const config = {
  // el punto de entrada de nuestra APP, JS que se ejecutara en el BROWSER
  entry: './src/index.js',
  output: {
    // el nombre que le daremos al archivo de salida principal
    filename: 'main.js',

    // donde se crearan los archivos de salida
    path: path.resolve(__dirname, 'dist'),
  },

  // configuracion para webpack-dev-server
  devServer: {
    // abrir la APP en el BROWSER
    open: true,

    // HACK para permitir ver la APP desde otros dispositivos
    host: '0.0.0.0',

    // ver el progreso de compilacion en la consola
    progress: true,

    // esto para que todas las URLs que fallen (404) devuelvan nuestro index.html
    historyApiFallback: true,

    // para que los errores en consola aparescan en un overlay en el BROWSER
    overlay: true,

    // habilitar HMR
    hot: true,
  },
  resolve: {
    alias: {
      // un alias que apunta a la carpeta `src/components`
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        // a que archivos afectara esta regla
        test: /\.js$/,

        // los loaders que apliquemos en la regla no afectaran
        // a archivos que coincidan con
        exclude: /(node_modules|bower_components)/,

        use: {
          // el nombre  del loader que usaremos
          loader: 'babel-loader',
          options: {
            // mejora la velocidad de compilacion
            // si en algun momento no se ven reflejados tus cambios
            // elimina la carpeta `node_modules/.cache`
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // la ruta donde se encuentra nuestro index.html
      // para que HtmlWebpackPlugin lo use
      template: 'src/index.html',
    }),
  ],
}
```

Ahora solo falta completar nuestros TODOs

```js
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // nuestra regla para poder importar archivos CSS
    config.module.rules.push({
      test: /\.css$/,

      // el primer loader en aplicarse es el ultimo, en este caso `postcss-loader`
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    })
    config.plugins.push(
      // con esto ya habilitamos HMR
      new webpack.HotModuleReplacementPlugin(),
    )
  }

  if (argv.mode === 'production') {
    // webpack reemplazara [name] con el nombre del archivo que importamos, ///
    // [contenthash:8] sera reemplazado por un hash de 8 digitos que cambia segun el contenido del archivo
    // aplicar long term caching a los archivos resultantes JS
    config.output.filename = 'static/js/bundle.[name].[contenthash:8].js'
    config.output.chunkFilename = 'static/js/chunk.[name].[contenthash:8].js'

    // nuestra regla para extraer los archivos CSSs en sus propios archivos
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    })
    config.plugins.push(
      new MiniCssExtractPlugin({
        // aplicar long term caching a los archivos resultantes CSS
        filename: 'static/css/bundle.[name].[contenthash:8].css',
        chunkFilename: 'static/css/chunk.[name].[contenthash:8].css',
      }),
    )
  }
  return config
}
```

Con esto ya tienes una configuracion bien estandar, si trabajas con vue puedes continuar [aqui](https://vue-loader.vuejs.org/), o si trabajas con react agrega este preset [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) a la configuracion de babel.

## Configuracion final

```js
// webpack.config.js

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    progress: true,
    historyApiFallback: true,
    overlay: true,
    hot: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    })
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (argv.mode === 'production') {
    config.output.filename = 'static/js/bundle.[name].[contenthash:8].js'
    config.output.chunkFilename = 'static/js/chunk.[name].[contenthash:8].js'
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    })
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/bundle.[name].[contenthash:8].css',
        chunkFilename: 'static/css/chunk.[name].[contenthash:8].css',
      }),
    )
  }
  return config
}
```

## Referencias

- https://www.zzuu666.com/articles/9
- https://webpack.js.org/configuration/mode/#root
- https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching
