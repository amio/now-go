const micro = require('micro')
const fetch = require('node-fetch')
const deepAssign = require('deep-assign')

module.exports = startWithConfig

// for tests
// exports.startWithConfig = startWithConfig
// exports.fetchLocalConfig = fetchLocalConfig
// exports.fetchRemoteConfig = fetchRemoteConfig
// exports.createRouter = createRouter

function startWithConfig (configLocation) {
  const gotConfig = isURL(configLocation)
    ? fetchRemoteConfig(configLocation)
    : fetchLocalConfig(configLocation)

  gotConfig.then(cfg => {
    const { routes, port } = cfg
    const router = createRouter(routes)

    // Start server
    micro((req, res) => {
      router(req, res)
    }).listen(port)
  }, err => console.error(err))
}

function fetchRemoteConfig (configURL) {
  return fetch(configURL).then(res => res.json())
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
