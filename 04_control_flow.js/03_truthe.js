const userEmail="pushp@gmail.com"

if(userEmail) {
    console.log("Email is present");
}else{
    console.log("Email is not present");
}

//what goes behind the scenes

// if(userEmail !== undefined && userEmail !== null && userEmail !== false && userEmail !== 0 && userEmail !== "" && userEmail !== NaN) {
//     console.log("Email is present");
// }else{
//     console.log("Email is not present");
// }

const emptyObj={}

if(Object.keys(emptyObj).length) {  //bcoz this gives the array of keys in the object
    console.log("Object is not empty");
}


//nullish coalescing operator (??) null undefined
let val1;
val1=5 ?? 10; //if val1 is null or undefined then it will take 10 otherwise it will take 5
console.log(val1); //5

val1=null ?? 10; //if val1 is null or undefined then it will take 10 otherwise it will take null
console.log(val1); //5

val1=undefined ?? 10 ?? 20; //if val1 is null or undefined then it will take 10 otherwise it will take undefined
console.log(val1); //10


//Ternary operator....if else shorthand

//condition ? expressionIfTrue : expressionIfFalse

const price=90;
price> 100 ? console.log("Price is greater than 100") : console.log("Price is less than or equal to 100");

