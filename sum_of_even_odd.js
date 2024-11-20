let arr = [1, 2, 3, 4, 5, 6];

let esum = 0;
let osum = 0;

for( let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        esum = esum + arr[i];
    }
    else {
        osum = osum + arr[i];
    }
}

console.log("Sum of even numbers: " + esum);
console.log("Sum of odd numbers: " + osum);
