module.exports = {
  plugins: [
    require('lost'),
    require('postcss-responsive-type')(),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })
  ]
}
