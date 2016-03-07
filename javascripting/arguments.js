var math = function(first, second, third) {

  var result = second * third + first;

  return result === result + 0 ? result : 'I need numbers to calculate';
}

console.log(math(53,61,67));
