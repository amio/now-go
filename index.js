const path = require('path')
const server = require('./go-server.js')

const configPath = path.join(__dirname, 'config.json')
const { routes, port } = require('./config.js')(configPath)

if (require.main === module) {
  server(routes).listen(port)
} else {
  module.exports = server
}
