var http = require('http');
var map = require('through2-map')

var server = http.createServer(function(req, res) {
  if(req.method == 'POST'){
    res.writeHead(200, { 'content-type': 'text/plain' })
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  }else {
    console.log("Request must be a post method");
  }
})

server.listen(process.argv[2])
