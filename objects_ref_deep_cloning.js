let person1 = {
    name: "John",
    age: 25,
    city: "New York",
    address: {
        street: "5th Avenue",
        zip: "10001"
    }
};

// Deep copy using JSON methods
let person2 = JSON.parse(JSON.stringify(person1));
person2.name = "Jane";
person2.address.street = "Broadway";

// Now the nested object in person2 is also copied by value
console.log(person1);
console.log(person2);
