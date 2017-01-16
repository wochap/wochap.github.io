import moment from 'moment'

/**
 * format date with moment
 * @param  {String} date - the date in 'DD-MM-YYYY' format
 * @return {String}      - the date formatted. e.g.: 21 de diciembre de 2016
 */
export function formatDate (date) { // eslint-disable-line
  return moment(date, 'YYYY-MM-DD').format('LL')
}
