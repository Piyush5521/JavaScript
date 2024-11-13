let person1 = {
    name:"John",
    age: 25,
    city: "New York"
};

let person2 = {};

for(let key in person1){
    person2[key] = person1[key];
}

person2.name = "Jane"

console.log(person1);
console.log(person2);
