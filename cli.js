const nowGo = require('./index.js')

const args = require('minimist')(process.argv.slice(2), {
  alias: {
    'c': 'config'
  },
  default: {
    'config': 'config.example.json'
  }
})

nowGo(args.config)
