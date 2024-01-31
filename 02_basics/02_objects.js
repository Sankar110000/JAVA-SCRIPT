//   singleton


//  object Literals

const mySym = Symbol("kay1");
// console.log([mySym]);


const user = {
    name: "sankar",
    "full_name": "Kaibalya Sahoo",
    [mySym]: "mykey1",
    age: 18,
    location: "kanpur",
    email: "sankar@gmail.com",
    isLoggedin: true,
    lastLogin: ["sun", "mon", "tue"]
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full_name"]);
// console.log(user[mySym]);


user.email = "kaibalay@gmail.com";
// Object.freeze(user);
user.age = 19;
// console.log(user);

user.greeting = function () {
    console.log("Hello user");
}

// console.log(user.greeting());

user.greeting2 = function () {
    console.log(`Hello user ${this.name}`);
}
console.log(user.greeting2());