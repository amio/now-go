const micro = require('micro')
const config = getConfig()

const redirector = (req, res) => {
  const key = req.url.replace('/', '')
  const target = getMatchedURL(key)

  if (typeof target === 'string') {
    res.writeHead(301, { 'Location': target })
  } else if (isURL(config.default)) {
    res.writeHead(302, { 'Location': config.default})
  } else {
    micro.send(res, 404, config.default || 'Oops')
  }
}

function getMatchedURL (key) {
  return config.mapping[key]
}

function isURL (text) {
  return /\w{2,6}:\/\/\w/.test(text)
}

function getConfig () {
  const defaultConfig = {
    "mapping": {},
    "default": "It's works! Change this default message(or url) in config.json",
    "port": 3000
  }
  try {
    return Object.assign(defaultConfig, require('./config.json'))
  } catch (e) {
    return Object.assign(defaultConfig, {
      'default': 'ERR >> ' + e.message
    })
  }
}

micro(redirector).listen(config.port)
