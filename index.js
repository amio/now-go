const micro = require('micro')
const deepAssign = require('deep-assign')

// module.exports = start
exports.start = startWithConfig

function startWithConfig (configPath) {
  fetchLocalConfig(configPath).then(cfg => {
    const { routes, port } = cfg
    const router = createRouter(routes)
    micro((req, res) => router(req, res)).listen(port)
  }, err => console.error(err))
}

function fetchLocalConfig (configPath) {
  const defaultConfig = {
    'routes': { '?': 'What are you looking for' },
    'port': 3000
  }

  return new Promise((resolve, reject) => {
    try {
      const userConfig = require(configPath)
      resolve(deepAssign(defaultConfig, userConfig))
    } catch (e) {
      resolve(deepAssign(defaultConfig, {
        'routes': { '?': 'ERROR >> ' + e.message }
      }))
    }
    reject()
  })
}

function createRouter (routes) {
  return (req, res) => {
    const key = req.url.replace('/', '') || '/'
    const signpost = routes[key] || routes['?'] || 'Oops'

    if (isURL(signpost)) {
      res.writeHead(301, { 'Location': signpost })
    } else {
      const httpCode = routes[key] ? 200 : 404
      micro.send(res, httpCode, signpost)
    }
  }
}

function isURL (text) {
  return /\w{2,6}:\/\/\w/.test(text)
}
