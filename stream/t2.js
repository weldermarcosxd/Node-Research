var through2 = require('through2');

var stream = through2(function(buff, enc, next){
  this.push(buff.toString().toUpperCase());
  next()
}, function(done){
  done()
})

process.stdin.pipe(stream).pipe(process.stdout)
