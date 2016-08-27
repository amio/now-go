const micro = require('micro')

function serve (config, port) {
  const server = micro((req, res) => {
    const key = req.url.replace('/', '') || '/'
    const target = config.mapping[key]

    if (typeof target === 'string') {
      res.writeHead(301, { 'Location': target })
    } else if (isURL(config.default)) {
      res.writeHead(302, { 'Location': config.default})
    } else {
      micro.send(res, 404, config.default || 'Oops')
    }
  })

  server.listen(port)
}

function isURL (text) {
  return /\w{2,6}:\/\/\w/.test(text)
}

module.exports = serve
