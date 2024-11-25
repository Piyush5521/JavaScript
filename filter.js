// Array Methods questions

// Q) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
      return arr.filter((n) => n%2===0 )
}
// test
console.log(evensOnly([3, 6, 8, 2]));
