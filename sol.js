// palindrome 
let num = prompt("Enter a string to check plaindrome: ", "");

let splitum = num.split('');
let reverseNum = splitum.reverse();
let revnum = reverseNum.join('');

if (num === revnum) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// find max and min number from array
let arr = [3, 1, 5, 7, -2, 9];

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

let max= arr[0];
for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
}

let min = arr[0];
for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
}
console.log("Maximum Number: " + max);
console.log("Minimum Number: " + min);
