const getReadingTime = require('reading-time')

// source: https://github.com/gaearon/overreacted.io/blob/master/src/utils/helpers.js#L1
function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5)
  if (cups > 5) {
    return new Array(Math.round(cups / Math.E)).fill('🍱').join('')
  }
  return new Array(cups || 1).fill('☕️').join('')
}

module.exports = function (markdown) {
  const {minutes, words} = getReadingTime(markdown)
  const timeUnit = minutes > 1 ? 'minutos' : 'minuto'
  if (process.env.SSG_LANG === 'es') {
    return [`${formatReadingTime(minutes)} ${Math.ceil(minutes)} ${timeUnit} de lectura`, words]
  }
  return [`${formatReadingTime(minutes)} ${Math.ceil(minutes)} min read`, words]
}
