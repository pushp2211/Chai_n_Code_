//primitive 

// 7 types:String ,Number,Null ,Boolean, undefined,Symbol ,BigInt

const score=100 //js is dynamic typed language
const ScoreValue=100.43

const isLoggedIn=false
const outsideTemp=null

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

//refrence(Non Primitive)

//Array, Objects ,Functions

const heroes=["ab","bc","cd"];

let myObj= {
 name: "pushpraj", 
 age:"22"
}

const myFunction=function(){
    console.log("hello world");
}

//type of operator results

console.log(typeof heroes);
console.log(typeof anotherId);
console.log(typeof myObj); 

//Stack(Primitive)
//Heap(non-primitive)
 
let name="pushpraj";
let anothername=name;
anothername="raj";
console.log(name);
console.log(anothername);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybol"
}

let userTwo=userOne;
userTwo.email="pushp@gmail.com"; //acessing element of object

console.log(userOne);
console.log(userTwo);





