const http = require('http')

function main (routesConfig, options = {}) {
  const router = createRouter(routesConfig)
  const { port = 3000 } = options
  http.createServer(router).listen(port)
}

function createRouter (routes) {
  return function router (req, res) {
    const signpost = routes[req.url] || routes['*']
    signpostHandler(signpost, req, res, 0)
  }
}

function signpostHandler (signpost, req, res, depth) {
  if (depth > 10) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    return res.end('TOO_MUCH_DEPTH')
  }

  if (isURL(signpost)) {
    res.writeHead(302, { 'Location': signpost })
    return res.end()
  }

  if (isText(signpost)) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    return res.end(signpost)
  }

  if (isHandler(signpost)) {
    try {
      return signpostHandler(signpost(req), req, res, depth + 1)
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end(`CONFIG ERROR: ${e.toString()}`)
    }
  }

  if (signpost !== undefined) {
    console.error(`Unrecognized Config: ${signpost.toString()}`)
  } else {
    console.info(`404: ${req.url} (${depth}) ${signpost}`)
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('NOTFOUND')
}

function isURL (text) {
  return isText(text) && /^https?:\/\/\w/.test(text)
}

function isText (text) {
  return typeof text === 'string'
}

function isHandler (signpost) {
  return typeof signpost === 'function'
}

module.exports = main
exports.createHandler = createRouter
