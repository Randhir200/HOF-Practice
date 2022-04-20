// Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)

var arr = [1, 2, 3, 4, 5, 6];
var out = arr.reduce(function(acc,ele){
  acc+=ele**3;
  return acc;
},0);
console.log(out);
