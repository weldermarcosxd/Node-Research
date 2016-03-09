var http = require('http');
var url = require('url');

function hours(watch, iso) {
  var date = new Date(iso)

  if (watch == 'clock') {
    var time = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }
  }else {
    var time = {
      "unixtime": date.getTime()
    }
  }
  return JSON.stringify(time)
}

var server = http.createServer(function(req, res){
  var uri = url.parse(req.url, true)
  res.writeHead(200, { 'Content-Type': 'application/json' })

  if(req.method == 'GET'){
    if (uri.pathname == '/api/parsetime') {
      res.write(hours('clock', uri.query.iso))
    }else if (uri.pathname == '/api/unixtime') {
      res.write(hours('unix', uri.query.iso))
    }else {
      console.log("Onde estou?");
    }
    res.end()
  }
})

server.listen(process.argv[2])
