const http = require('http')
const request = require('supertest')
const tap = require('tap')

const exampleServer = require('../example/index.js')

const server = http.createServer(exampleServer)

tap.test('TEXT: echo text', t => {
  return request(server)
    .get('/tag')
    .expect(200, 'Now go, let the legend come back to life!')
})

tap.test('URL : redirect to url', t => {
  return request(server)
    .get('/')
    .expect(302)
    .expect('Location', 'https://github.com/amio/now-go')
})

tap.test('FUNC: programmatically usage', t => {
  return request(server)
    .get('/notfund')
    .expect(200, 'Yet another tinyurl service.')
})
