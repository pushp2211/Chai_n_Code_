// const tinderuser=new Object();  //singleton object

const tinderuser={} //non singleton object

tinderuser.id="123abc"
tinderuser.name="John"
tinderuser.isLoggedin=true
console.log(tinderuser);

//nested object
const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
        firstname:"John",
        lastname:"Doe"
    }
 }
}

console.log(regularUser.fullname.userfullname.firstname); //optional chaining ? 

//combining objects
const obj1={a:1,b:2,c:3}
const obj2={d:4,e:5,f:6}

const obj3={...obj1,...obj2} //spread operator most likely used
console.log(obj3);
const obj4=Object.assign({},obj1,obj2)//assign method used to combine objects obj(source,target)
console.log(obj4);

//array of objects....data from database
const users=[
    {
        id:1,
        name:"John",
        age:30,
        isLoggedin:true
    },
    {
        id:2,
        name:"Jane",
        age:25,
        isLoggedin:false
    },
    {
        id:3,
        name:"Doe",
        age:28,
        isLoggedin:true
    }
]
console.log(users[0].name); //accessing first object in the array

console.log(tinderuser);
console.log(Object.keys(tinderuser)); //keys of the object
console.log(Object.values(tinderuser)); //values of the object
console.log(Object.entries(tinderuser)); //key value pairs of the object

console.log(tinderuser.hasOwnProperty("id")); //check if the object has a property

//destructuring objects
const course={
    coursename:"javascript",
    price:"999",
    instructor:"pushp"
}

// course.instructor

const{instructor:inst}=course //destructuring the instructor property from the course object and can also rename it

// console.log(instructor); //if not renamed then use constructor only
console.log(inst); //pushp

//arrays too get destructured but rarely

//API:apna kaam dusre ke sarr pe

// method 1
// {
//     "name":"pushp",
//     "age":"30",
//     "isLoggedin":"true"
// }

// method 2 :API as array of objects
[
    {}, 
    {},
    {}
]



