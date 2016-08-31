const micro = require('micro')

function goServer (routes) {
  return micro((req, res) => {
    const key = req.url.replace('/', '') || '/'
    const signpost = routes[key] || routes['?'] || 'Oops'

    if (isURL(signpost)) {
      res.writeHead(301, { 'Location': signpost })
    } else {
      const httpCode = routes[key] ? 200 : 404
      micro.send(res, httpCode, signpost)
    }
  })
}

function isURL (text) {
  return /\w{2,6}:\/\/\w/.test(text)
}

module.exports = goServer
