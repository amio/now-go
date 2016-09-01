const deepAssign = require('deep-assign')

const defaultConfig = {
  'routes': {
    '?': 'What are you looking for'
  },
  'port': 3000
}

module.exports = function getConfig (configPath) {
  return new Promise((resolve, reject) => {
    try {
      const userConfig = require(configPath)
      resolve(deepAssign(defaultConfig, userConfig))
    } catch (e) {
      resolve(deepAssign(defaultConfig, {
        'routes': {
          '?': 'ERROR >> ' + e.message
        }
      }))
    }
    reject()
  })
}
