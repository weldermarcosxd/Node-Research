var through2 = require('through2');
var split = require('split');

var low = true

var stream = through2(function(buff, enc, next){
  !low ? this.push((buff.toString().toUpperCase()).concat("\n")):
    this.push((buff.toString()).concat("\n").toLowerCase())

  low = !low
  next()
}, function(done){
  done()
})

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout)
