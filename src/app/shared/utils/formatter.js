import moment from 'moment'
import {COLLECTION_DATE_FORMAT} from 'app/config/constants'

/**
 * format date with moment
 * @param  {String} date - the date in 'DD-MM-YYYY' format
 * @return {String}      - the date formatted. e.g.: 21 de diciembre de 2016
 */
export function formatDate(date) {
  return moment(date, COLLECTION_DATE_FORMAT).format('LL')
}
