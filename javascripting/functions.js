var eat = function (food){
  return food === food + '' ? food + ' tasted really good.' : 'Thats isnt food';
}


console.log(eat('bananas'));
