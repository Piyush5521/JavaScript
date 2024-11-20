let str = "Hello World!";

str = str.toLowerCase();


let count = 0;
let cons = 0;

for (let i = 0; i < str.length; i++ ) {
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        count++
    }
    else if(str[i] >= 'a' && str[i] <= 'z') {
        cons++
    }
}

console.log("Vowels: " + count);
console.log("Consonants: " + cons);
