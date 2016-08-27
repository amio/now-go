const path = require('path')
const serve = require('./serve.js')

const configPath = path.join(__dirname, 'config.json')
const config = require('./config.js')(configPath)

if (require.main === module) {
  serve(config, config.port)
} else {
  module.exports = serve
}
