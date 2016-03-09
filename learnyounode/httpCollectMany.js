var http = require('http');
var bl = require('bl');

var i = 0
var results = []
var urls = []

while (process.argv[i+2] != null) {
  urls.push(process.argv[i+2])
  i++
}

function printResults(results) {
  results.forEach(function(result){
    console.log(result);
  })
}

urls.forEach(function(url){
  http.get(url, function(response) {
    response.pipe(bl(function(err, data){
      if(!err){
        results.push(data.toString())
      }else {
        console.error(err);
      }
      i--
      if(i == 0){
        printResults(results)
      }
    }))
  })
})
