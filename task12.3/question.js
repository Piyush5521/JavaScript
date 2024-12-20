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


