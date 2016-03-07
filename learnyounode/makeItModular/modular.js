var fileList = require('./fileList');

var res = fileList(process.argv[2], process.argv[3])

res.forEach(function(file){
  console.log(file);
})
