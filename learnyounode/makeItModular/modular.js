var fileList = require('./fileList.js');

var res = fileList(process.argv[2], process.argv[3], function(err, data){
  if (!err) {
    data.forEach(function(file){
      console.log(file);
    })
  }else{
    console.error('An Error Occourred', err);
  }
})
