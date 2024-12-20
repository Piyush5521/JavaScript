let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let newarr = [];

let str = prompt("Enter a string ", "");

for(let i = 0; i < str.length; i++) {
        newarr.push(str[i]);
}

for (let i = 0; i < newarr.length; i++) {
    for (let j = i + 1; j < newarr.length; j++) {
        if (newarr[i] > newarr[j]) {
            let c = newarr[j];
            newarr[i] = newarr[j];
            newarr[i] = c;
        }
    }
}

for (let i = 0; i < arr.length; i++) {
    str += newarr[i];
}

console.log(newarr);


// let arr = [6, 1, 2, 5, 3, 4];
// let str = ""; 

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let c = arr[j];
//             arr[j] = arr[i];
//             arr[i] = c;
//         }
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
// }

// console.log(str);