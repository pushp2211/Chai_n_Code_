const score=400;

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)) //no after decimal like e commerce

const otherNUmber=23.567
console.log(otherNUmber.toPrecision(3)) //3 value tkk precision...23.6

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'))  //indian system ke hisaab se comma default US

// *****************maths********************
console.log(Math)
// console.log(Math.abs(-4))  //absolute value
// console.log(Math.round(4.56)) //round of
// console.log(Math.floor(4.56))  //round of upper
// console.log(Math.ceil(4.1))
// console.log(Math.min(4,3,5,6));
// console.log(Math.max(4,3,6,8));

//there are so many other things in math.something can explore

console.log((Math.random()*10)+1);  // random number generation from 0 to <1
console.log(Math.floor((Math.random()*10)+1)); // to get numbers from 1 to 10

const min=10
const max=30
console.log(Math.floor(Math.random()*(max-min+1))+min) //important

