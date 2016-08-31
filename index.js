const path = require('path')
const config = require('./go-config.js')
const server = require('./go-server.js')

if (require.main === module) {
  const configPath = path.join(__dirname, 'config.json')
  const { routes, port } = config(configPath)
  server(routes).listen(port)
} else {
  module.exports = server
}
