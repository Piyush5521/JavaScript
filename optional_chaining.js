let user = {
    name: "Alice",
    profile: {
        age: 30,
        country: "USA"
    },
    contact: {
        email: "alice@example.com",
        phone: {
            home: "123-456-7890",
            work: "987-654-3210"
        }
    }
};

console.log("Age: " + user?.profile?.age);
console.log("Work Phone: " + user?.contact?.phone?.work);
console.log("City: " + user?.profile?.city?. undefined);
