// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

var arr =[2,3,4];
var out = arr.reduce(function(acc,ele){
  acc*=ele;
  return acc;
},1)
console.log(out)