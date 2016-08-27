const path = require('path')
const serve = require('./serve.js')

const config = getConfig(path.join(__dirname, './config.json'))

serve(config, config.port)

function getConfig (configPath) {
  const defaultConfig = {
    "default": "Now go, let legend come back to life!",
    "mapping": {},
    "port": 3000
  }
  try {
    return Object.assign(defaultConfig, require(configPath))
  } catch (e) {
    return Object.assign(defaultConfig, {
      'default': 'ERR >> ' + e.message
    })
  }
}
