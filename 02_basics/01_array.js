//array

const myArr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr); // prints the array
console.log(myArr[2]) 

const myArr2 = new Array(10); // creates an array with 10 undefined elements

//array methods
//push
myArr.push(11); // adds 11 to the end of the array
//pop
myArr.pop(); // removes the last element (10) from the array
//unshift
myArr.unshift(0); // adds 0 to the beginning of the array
//shift
myArr.shift(); // removes the first element (0) from the array
//splice
myArr.splice(2, 3); // removes 3 elements starting from index 2 (elements 3, 4, and 5)
//slice
const slicedArr = myArr.slice(1, 4); // creates a new array with elements from index 1 to 3 (2, 3, 4)
//concat
const newArr = myArr.concat([11, 12, 13]); // combines myArr with a new array [11, 12, 13]

console.log(myArr.includes(5)); // checks if 5 is in the array, returns true
console.log(myArr.indexOf(5)); // returns the index of 5 in the array, which is 3


console.log(myArr.join()); // joins the array elements into a string separated by commas
console.log(myArr.join(' - ')); // joins the array elements into a string separated by ' - '

console.log(myArr.toString()); // converts the array to a string
console.log(typeof(newArr)); // prints the type of newArr, which is a string

//slice aur splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B" ,myArr);//original array not updated

const myn2=myArr.splice(1,3);
console.log("c",myArr); //original array got updated
console.log(myn2);
