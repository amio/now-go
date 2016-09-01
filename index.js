const path = require('path')
const config = require('./go-config.js')
const server = require('./go-server.js')

if (require.main === module) {
  const configPath = path.join(__dirname, 'config.json')

  config(configPath).then(cfg => {
    const { routes, port } = cfg
    server(routes).listen(port)
  })
} else {
  module.exports = server
}
