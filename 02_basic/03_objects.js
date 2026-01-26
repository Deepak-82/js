// singleton
Object.create //constructor method

// Object literals

const mySym = Symbol("key1");
const jsUser = {
    name: "Deepak",
    "full name": "Deepak Pal", //not accessible with dot notation
    [mySym]: "key1",//symbol as key
    age: 20,
    location: "Jaipur",
    email: "deepak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(jsUser.age);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);//accessing symbol with [] notation


jsUser.email = "deepak@outlook.com";
// Object.freeze(jsUser);//prevents modification of object
jsUser.email = "deepak@microsoft.com";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this["full name"]}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo());
