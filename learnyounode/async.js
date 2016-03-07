var fs = require('fs');

fs.readFile(process.argv[2], function readed(err, data) {
  if(!err){
    var str =  data.toString().split('\n');
    console.log(str.length - 1);
  }
}); 
