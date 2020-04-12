import prevalMarkdown from '../../../lib/macros/markdown.macro'

const DOMAIN_NAME = 'geanmarroquin.com'
const BASE_URL = `https://${DOMAIN_NAME}`
const TITLE = 'Gean Marroquin'
const ABOUT_HTML = prevalMarkdown`
  Establecido en Perú, soy <i class="u-icon u-color-javascript u-fz-h2">javascript</i> Developer enfocado en la creación de componentes escalables y reusables con <i class="u-icon u-color-vue_js u-fz-h2">vue_js</i> y <i class="u-icon u-color-react u-fz-h2">react</i>, apasionado y autodidacta.
`
const ABOUT =
  'Establecido en Peru, soy Javascript Developer enfocado en la creación de componentes escalables y reusables con vue y react, apasionado y autodidacta.'

export default {
  domainName: DOMAIN_NAME,
  baseUrl: BASE_URL,
  title: TITLE,
  email: 'gean.marroquin@gmail.com',
  about: ABOUT_HTML,
  twitterUser: 'geanmarroquin',
  screens: {
    about: {
      breadCrumbName: 'Sobre mi',
      title: `JS Developer | ${TITLE}`,
      description: ABOUT,
      canonicalHref: `${BASE_URL}/about`,
    },
    blog: {
      breadCrumbName: 'Blog',
      title: `Artículos y tutoriales | ${TITLE}`,
      description: `Tutoriales sobre desarrollo de aplicaciones web y mobile.`,
      canonicalHref: `${BASE_URL}/blog`,
    },
    contact: {
      breadCrumbName: 'Contacto',
      title: `Contacto | ${TITLE}`,
      description: ABOUT,
      canonicalHref: `${BASE_URL}/contact`,
    },
    home: {
      breadCrumbName: 'Inicio',
      title: `Inicio | ${TITLE}`,
      description: ABOUT,
      canonicalHref: BASE_URL,
    },
    notFound: {
      title: `Página no encontrada`,
    },
    works: {
      breadCrumbName: 'Portafolio',
      title: `Portafolio | ${TITLE}`,
      description: `Portafolio de ${TITLE}, proyectos como freelance y experimentos personales.`,
      canonicalHref: `${BASE_URL}/works`,
    },
  },
}
