// palindrome 
let num = prompt("Enter a number to check plaindrome: ", "");

let splitum = num.split('');
let reverseNum = splitum.reverse();
let revnum = reverseNum.join('');

if (num === revnum) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// 
