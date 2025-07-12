// map: callback function in which each element of the array is processed and a new array is returned

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1= myNums.map((num) => num+10); // map method returns a new array with the results of calling a provided function on every element in the calling array.
console.log(newNums1); // [11, 12, 13, 14,15, 16, 17, 18, 19, 20]

//chaining map with filter: what if we want to add 10 to all numbers greater than 4?
const newNums2 = myNums.filter((num) => num > 4).map((num)=> num + 10); // first filter the numbers greater than 4, then add 10 to each of them
console.log(newNums2); // [15, 16, 17, 18,19, 20]


// chaining map with map: what if we want to add 10 to all numbers and then filter the numbers greater than 15?

const newNums3 = myNums.map((num) => num + 10).filter((num) => num > 15); // first add 10 to each number, then filter the numbers greater than 15
console.log(newNums3); // [16, 17, 18, 19,20]

const newNums4= myNums
    .map((num) => num + 10)
    .filter((num) => num > 15)
    .map((num) => num * 2); // first add 10 to each number, then filter the numbers greater than 15, then multiply each number by 2     

console.log(newNums4); // [32, 34, 36, 38, 40]