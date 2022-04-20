// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8

var arr = ["A", "Good", "Problem"];
var out = arr.filter(function(ele){
  if(ele.length%2!=0){
    return ele;
  }
}).reduce(function(sum,ele){
  sum+=ele.length;
  return sum;
},0)
console.log(out);