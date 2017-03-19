// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db-1489900309669.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})
