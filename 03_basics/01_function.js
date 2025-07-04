function sayMyName(name) {
  console.log(`My name is ${name}`);
}

sayMyName("maximus medina");

function addTwoNumbers(num1, num2) {
  console.log(num1+num2);
}

const result=addTwoNumbers(5, 10);

//parameter passing
function loginUser(userName="Sam"){   //default sam if nothing is passed
    return `${userName} just logged in`;
}

console.log(loginUser("maximus medina"));

//if parameter not passed returns undefined


//eg:shopping cart

function calculatePrice(...num1) {  //using rest operator to accept multiple arguments
  return num1
}
// function calculatePrice(val1,val2...num1) {   //if i pass parameters like this, val1=100,val2=200 and num1 will be an array of rest of the values
console.log(calculatePrice(100,200,300,400,500));

const user={
  name: "maximus medina",
  age: 30,
  email: "abc@gmail.com"
}

function handleObject(anyobject) {
  console.log(`username is${anyobject.name} and age is ${anyobject.age}`);
}

handleObject(user);


//passing object directly
handleObject({
  name:"pushpraj",
  age:33,
  email:"abx@abc"
});


//passing array as parameter

const myNewAraay=[1,2,3,4,5];

function returnSecondVAlue(array) {
  return array[1];
}

console.log(returnSecondVAlue(myNewAraay));