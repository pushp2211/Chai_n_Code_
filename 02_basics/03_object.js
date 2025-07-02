// singleton
//when declared as literals doesnt form as singleton
//constructor se singleton

// Object.create


//object literals
//in object we can defines keys or can go with values too
const mySym=Symbol("key1");

const jsUser={
    "full name": "pushpraj singh",
    name: "pushp",
    age: 25,
    [mySym]: "value1", // using symbol as key important for unique keys
    isActive: true,
    email: "pushp@123",
    location:"jaipur"
}

console.log(jsUser);

//accessing object properties
console.log(jsUser.name); // dot notation
console.log(jsUser["age"]); // bracket notation

console.log(jsUser["full name"]); // bracket notation with space in key only option
console.log(jsUser[mySym]); // accessing symbol key

//updating object properties
jsUser.name = "pushpraj";

// Object.freeze(jsUser); // makes object immutable, no changes allowed

jsUser.greeting= function(){
    console.log("Hello Js User");
}

console.log(jsUser.greeting());

jsUser.greetingtwo= function(){
            console.log(`Hello Js User, ${this.name}`); //' and ` this is different
}
console.log(jsUser.greetingtwo());