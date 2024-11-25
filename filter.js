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


// Q) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr){
      return arr.filter((n) => n.member === true );
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
