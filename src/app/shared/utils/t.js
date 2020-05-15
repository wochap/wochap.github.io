import {SSG_LANG} from 'app/config/constants'

export default (en, es) => (SSG_LANG === 'es' && es ? es : en)
