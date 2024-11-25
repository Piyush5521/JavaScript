// Array Methods questions

// Q) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
      return arr.filter((n) => n%2===0 )
}
// test
console.log(evensOnly([3, 6, 8, 2]));

// Q) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length      
function fiveCharactersOrFewerOnly(arr) {
  return arr.filter((n) => n.length <= 5);
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
