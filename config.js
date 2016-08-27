const deepAssign = require('deep-assign')

module.exports = function getConfig (configPath) {
  const defaultConfig = {
    "routes": {
      "?": "Now go, let legend come back to life!",
    },
    "port": 3000
  }
  try {
    const userConfig = require(configPath)
    return deepAssign(defaultConfig, userConfig)
  } catch (e) {
    return deepAssign(defaultConfig, {
      'routes': {
        '?': 'ERROR >> ' + e.message
      }
    })
  }
}
