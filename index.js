const config = require('./config.example.json')
const micro = require('micro')

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

micro(redirector).listen(config.port || 80)
