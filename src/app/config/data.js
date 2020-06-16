import prevalMarkdown from 'markdown.macro'
import t from 'app/shared/utils/t'

const DOMAIN_NAME = 'geanmarroquin.com'
export const BASE_URL_EN = `https://${DOMAIN_NAME}`
export const BASE_URL_ES = `https://es.${DOMAIN_NAME}`
const TITLE = 'Gean Marroquin'
const ABOUT_ES =
  'Establecido en Peru, soy un Software Engineer con un conocimiento fuerte en Javascript, enfocado en la creación de componentes escalables y reusables con Vue y React.'
const ABOUT_EN =
  "Based in Peru, i'm a Software Engineer with strong knowledge in Javascript, focused on creating scalable and reusable components with Vue and React."

// export default data
export default {
  domainName: t(DOMAIN_NAME, `es.${DOMAIN_NAME}`),
  baseUrl: t(BASE_URL_EN, BASE_URL_ES),
  title: TITLE,
  email: 'gean.marroquin@gmail.com',
  about: t(
    prevalMarkdown`Based in Peru, i'm a Software Engineer with strong knowledge in <i class="u-icon u-color-javascript u-fz-h2 u-mx1">javascript</i>, focused on creating scalable and reusable components with <i class="u-icon u-color-vue_js u-fz-h2 u-mx1">vue_js</i> and <i class="u-icon u-color-react u-fz-h2 u-mx1">react</i>.`,
    prevalMarkdown`Establecido en Perú, soy un Software Engineer con un conocimiento fuerte en <i class="u-icon u-color-javascript u-fz-h2 u-mx1">javascript</i>, enfocado en la creación de componentes escalables y reusables con <i class="u-icon u-color-vue_js u-fz-h2 u-mx1">vue_js</i> y <i class="u-icon u-color-react u-fz-h2 u-mx1">react</i>.`,
  ),
  twitterUser: 'geanmarroquin',
  screens: {
    home: {
      breadCrumbName: t('Home', 'Inicio'),
      canonicalHref: t(BASE_URL_EN, BASE_URL_ES),
      description: t(ABOUT_EN, ABOUT_ES),
      title: t(`Home | ${TITLE}`, `Inicio | ${TITLE}`),
    },
    about: {
      breadCrumbName: t('About', 'Sobre mi'),
      canonicalHref: t(`${BASE_URL_EN}/about`, `${BASE_URL_ES}/about`),
      description: t(ABOUT_EN, ABOUT_ES),
      title: `Software Engineer | ${TITLE}`,
    },
    blog: {
      breadCrumbName: 'Blog',
      canonicalHref: t(`${BASE_URL_EN}/blog`, `${BASE_URL_ES}/blog`),
      description: t(`Blog articles about web and mobile app development.`, `Tutoriales sobre desarrollo de aplicaciones web y mobile.`),
      title: t(`Blog | ${TITLE}`, `Artículos y tutoriales | ${TITLE}`),
    },
    contact: {
      breadCrumbName: 'Contact',
      canonicalHref: `${BASE_URL_EN}/contact`,
      description: t(ABOUT_EN, ABOUT_ES),
      title: t(`Contact | ${TITLE}`, `Contáctame | ${TITLE}`),
    },
    notFound: {
      title: t(`Page not found`, `Página no encontrada`),
    },
    works: {
      breadCrumbName: 'Portafolio',
      canonicalHref: t(`${BASE_URL_EN}/works`, `${BASE_URL_ES}/works`),
      description: t(
        `My latest works, projects i've been working on.`,
        `Portafolio de ${TITLE}, proyectos como freelance y experimentos personales.`,
      ),
      title: `Portafolio | ${TITLE}`,
    },
  },
}
