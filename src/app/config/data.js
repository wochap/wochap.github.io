const BASE_URL = 'https://geanmarroquin.com'
const TITLE = 'Gean Marroquin'
const ABOUT =
  'Soy un apasionado Front-end developer, autodidacta, de esos que gustan aprender y usar con las últimas tendencias/tecnologías web.'

export default {
  baseUrl: BASE_URL,
  title: TITLE,
  email: 'gean.marroquin@gmail.com',
  about: ABOUT,
  twitterUser: 'geanmarroquin',
  screens: {
    about: {
      title: `${TITLE} | Front-end developer`,
      description: ABOUT,
      canonicalHref: `${BASE_URL}/about`,
    },
    blog: {
      title: `${TITLE} | Artículos y tutoriales`,
      description: `Blog de ${TITLE}. Front-end developer, especialista en CSS y JavaScript.`,
      canonicalHref: `${BASE_URL}/blog`,
    },
    contact: {
      title: `${TITLE} | Front-end developer`,
      description: ABOUT,
      canonicalHref: `${BASE_URL}/contact`,
    },
    home: {
      title: `${TITLE} | Front-end developer`,
      description: ABOUT,
      canonicalHref: BASE_URL,
    },
    notFound: {
      title: '404',
    },
    works: {
      title: `${TITLE} | Portafolio`,
      description: `Portafolio de ${TITLE}. Front-end developer, especialista en CSS y JavaScript.`,
      canonicalHref: `${BASE_URL}/works`,
    },
  },
}
