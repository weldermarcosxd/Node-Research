var fs = require('fs');
var path = require('path');


module.exports = fs.readdir(process.argv[2], function extensions(err, files) {
  files.forEach(function(file) {
    if(path.extname(file) == '.' + process.argv[3]){
      console.log(file);
    }
  })
})
