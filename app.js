'use strict'

const http = require('http')
const port = process.env.PORT || 3000
// const hostname = process.env.IP || 'localhost'

http.createServer((req,res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })       

  res.end(JSON.stringify({
    IP: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].match(/\((.+?)\)/)[1]
  }))
}).listen(port)
