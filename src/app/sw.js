if ('serviceWorker' in navigator) {
  if (process.env.NODE_ENV === 'production') {
    navigator.serviceWorker.register('/static/sw.js')
  }
}
