var fs = require('fs');
var path = require('path');

module.exports = function(pat, ext, callback) {
    fs.readdir(pat, function(err, files){
      if(err){
        return callback(err)
      }else {
        var results = []
        files.forEach(function(file){
          if(path.extname(file) == '.' + ext){
            results.push(file)
          }
        })
        callback(null, results)
      }
    });
}
