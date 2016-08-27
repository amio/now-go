const micro = require('micro')

function serve (routes, port) {
  const server = micro((req, res) => {
    const key = req.url.replace('/', '') || '/'
    const target = routes[key] || routes['?']

    if (isURL(target)) {
      res.writeHead(301, { 'Location': target })
    } else {
      const code = routes[key] ? 301 : 404
      micro.send(res, code, target || 'Oops')
    }
  })

  server.listen(port)
}



function isURL (text) {
  return /\w{2,6}:\/\/\w/.test(text)
}

module.exports = serve
