const user={
    username: "pushpraj",
    price:999,
    
    welcomeMessage: function() {
        console.log(`Welcome ${this.username} to the course`); //when this is used inside a function, it refers to the object that contains the function
        console.log(this); //this refers to the user object...prints the user object
    }
    //this refers current context
}

user.welcomeMessage(); // Welcome pushpraj to the course
user.username="sam"; //changing the username
user.welcomeMessage(); // Welcome sam to the course

console.log(this); //this refers to the global object in node.js, in browser it refers to the window object

function chai1(){
    let username="pushpraj";
    console.log(this); //this refers to the global object in node.js, in browser it refers to the window object
    console.log(this.username)//will print undefined as this keyword not works for functions.
}
chai1(); // prints the global object

const chai2 =()=>{
    let username="pushpraj";
    console.log(this);
}
chai2() //undefined 


//+++++++++++++++++++++arrow function++++++++++++++++

// const addTwo=(num1+num2)=>{
//     return num1+num2
// }

//single line return 
// const addTwo=(num1,num2) => num1+num2

// const addTwo =(num1+num2)=> (num1+num2) //didn't used curly bracket so no need to use return keyword...used in react a lot...implicit return..can't return object in same way

// console.log(addTwo(3,4))

