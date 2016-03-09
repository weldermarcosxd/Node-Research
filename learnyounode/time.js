var net = require('net');

var server = net.createServer(function(socket) {
  function addZero(x){
    if(x < 10){
      return '0' + x
    }else{
      return x
    }
  }

  function now () {
    var date = new Date()
    var now =  date.getFullYear()  + '-' +
     addZero(date.getMonth() + 1) + '-' +
     addZero(date.getDate()) + ' ' +
     addZero(date.getHours()) + ':' +
     addZero(date.getMinutes()) + '\n'

     return now
  }

  socket.end(now())
});

server.listen(process.argv[2]);
