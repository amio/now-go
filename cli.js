const path = require('path')
const { start } = require('./index.js')

const args = require('minimist')(process.argv.slice(2), {
  alias: {
    'c': 'config'
  },
  default: {
    'config': 'config.example.json'
  }
})

start(path.join(__dirname, args.config))
