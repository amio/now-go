const http = require('http')
const createHandler = require('../index.js').createHandler
const config = require('../example.config.js')

module.exports = http.createServer(createHandler(config))
