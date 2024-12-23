let newArr = [];

let str = prompt("Enter a string ", "");

for(let i = 0; i < str.length; i++) {
        newArr.push(str[i]);
}

for (let i = 0; i < newArr.length; i++) {
    for (let j = i+1; j < newArr.length; j++) {
        if (newArr[i] > newArr[j]) {
            let c = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = c;
        }
    }
}

console.log(newArr);

// console.log('A'.charCodeAt(0))
// console.log('a'.charCodeAt(0))

// console.log('a' > 'A')




// let newArr = [];

// let str = prompt("Enter a string ", "");

// let count = 0;
// let charCount = 0;

// for(let i = 0; i < str.length; i++) {
//         if( str[i] === " ") {
//             count++
//         } else {
//             charCount++
//             newArr.push(str[i]); 
//         }
// }

// for (let i = 0; i < newArr.length; i++) {
//     for (let j = i+1; j < newArr.length; j++) {
//         if (newArr[i] > newArr[j]) {
//             let c = newArr[i];
//             newArr[i] = newArr[j];
//             newArr[j] = c;
//         }
//     }
// }

// let newString = "";

// let whiteSpace = 0;
// let extraSpace = 0;

// if (charCount > 1) {
//     whiteSpace = Math.floor(count / (charCount - 1));
//     extraSpace = count % (charCount - 1);
// }


// let result = "";
// for (let i = 0; i < newArr.length; i++) {
//     result += newArr[i];
//     if (i < newArr.length - 1) {
//         result += " ".repeat(whiteSpace);
//     }
// }

// if (extraSpace > 0) {
//     result += "*".repeat(extraSpace);
// }


// console.log("Total No Of Spaces "+count);
// console.log("Total No Of Characters "+charCount);
// console.log(result);
