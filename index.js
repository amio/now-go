const http = require('http')

function main (routesConfig, options = {}) {
  const router = createHandler(routesConfig)
  const { port = 3000 } = options
  http.createServer(router).listen(port)
}

function createHandler (routes) {
  return function router (req, res) {
    const signpost = routes[req.url] || routes['*']
    _signpostHandler(signpost, req, res, 0)
  }
}

function _signpostHandler (signpost, req, res, depth) {
  res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=604800')

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

  if (isFunc(signpost)) {
    try {
      return _signpostHandler(signpost(req), req, res, depth + 1)
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

function isURL (str) {
  return isText(str) && /^https?:\/\/\w/.test(str)
}

function isText (str) {
  return typeof str === 'string'
}

function isFunc (signpost) {
  return typeof signpost === 'function'
}

module.exports = main
module.exports.createHandler = createHandler
