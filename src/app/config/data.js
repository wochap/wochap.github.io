import prevalMarkdown from '../../../lib/macros/markdown.macro'

const BASE_URL = 'https://geanmarroquin.com'
const TITLE = 'Gean Marroquin'
const ABOUT = prevalMarkdown`
  Establecido en Perú, soy <i class="u-icon u-color-javascript u-fz-h2">javascript</i> Developer enfocado en la creación de componentes escalables y reusables con <i class="u-icon u-color-vue_js u-fz-h2">vue_js</i> y <i class="u-icon u-color-react u-fz-h2">react</i>, apasionado y autodidacta desde el principio.
`

export default {
  baseUrl: BASE_URL,
  title: TITLE,
  email: 'gean.marroquin@gmail.com',
  about: ABOUT,
  twitterUser: 'geanmarroquin',
  screens: {
    about: {
      title: `${TITLE} - JS Developer`,
      description: ABOUT,
      canonicalHref: `${BASE_URL}/about`,
    },
    blog: {
      title: `${TITLE} - Artículos y tutoriales`,
      description: `Blog de ${TITLE}.`,
      canonicalHref: `${BASE_URL}/blog`,
    },
    contact: {
      title: `${TITLE} - Contacto`,
      description: ABOUT,
      canonicalHref: `${BASE_URL}/contact`,
    },
    home: {
      title: `${TITLE} - Inicio`,
      description: ABOUT,
      canonicalHref: BASE_URL,
    },
    notFound: {
      title: `${TITLE} - Página no encontrada`,
    },
    works: {
      title: `${TITLE} - Portafolio`,
      description: `Portafolio de ${TITLE}.`,
      canonicalHref: `${BASE_URL}/works`,
    },
  },
}
