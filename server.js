var http = require("http")

console.log(process.env.PORT)

var port = process.env.PORT || 3000

var app = require("./app.js")

var server = http.createServer(app)

server.listen(port)
