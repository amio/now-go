const go = require('..')

const config = {
  '/': 'https://github.com/amio/now-go',
  '/tag': 'Now go, let the legend come back to life!',
  '/hero': 'https://amio.github.io/now-go/ocelot.jpg',
  '*': (req) => {
    if (req.headers.host === 'localhost:3000') {
      return 'Hello from localhost:3000'
    } else {
      return 'Yet another tinyurl service.'
    }
  }
}

// Export an http server handler for now v2
module.exports = go.createHandler(config)
