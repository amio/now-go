const path = require('path')
const serve = require('./serve.js')

const configPath = path.join(__dirname, 'config.json')
const { routes, port } = require('./config.js')(configPath)

if (require.main === module) {
  serve(routes, port)
} else {
  module.exports = serve
}
