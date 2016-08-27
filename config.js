module.exports = function getConfig (configPath) {
  const defaultConfig = {
    "default": "Now go, let legend come back to life!",
    "mapping": {},
    "port": 3000
  }
  try {
    const userConfig = require(configPath)
    return Object.assign(defaultConfig, userConfig)
  } catch (e) {
    return Object.assign(defaultConfig, {
      'default': 'ERROR >> ' + e.message
    })
  }
}
