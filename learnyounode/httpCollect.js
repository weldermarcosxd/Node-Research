var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response){
  response.pipe(bl(function(err, data){
    if(!err){
      console.log(data.length);
      console.log(data.toString());
    }else {
      response.on("error", console.error)
    }
  }))
})
