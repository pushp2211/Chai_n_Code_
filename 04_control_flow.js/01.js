// if
const condition = true;
if(condition){
    console.log("Condition is true");
    // code to execute if condition is true
}

//comparision operators
// <=,==, >, <, >=, !=, ===, !==, &&, ||, !
//=== also checks type

const temperature = 30;
if(temperature > 30){
    console.log("It's hot outside");
}

//Reminder:var is function scoped, let and const are block scoped..var gets global scope if not in a function

const balance = 1000;
if(balance < 500) console.log("Low balance"); //implicit scope

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("You can make a purchase");
}

