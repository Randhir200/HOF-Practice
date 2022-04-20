// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2,5,6]

var arr = [2, 4, 5, 3, 6, 8];

var out = arr.filter(function(ele,i){
  if(i%2==0){
    return(ele);
  }
})
console.log(out)
