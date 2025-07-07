//array specific loops

//for of loop: this loop is used to iterate over iterable objects like arrays, strings, etc.

const arr = [1, 2, 3, 4, 5];

for(const value of arr) {
    console.log(value);
}

// for in loop: this loop is used to iterate over the properties of an object. It is not recommended to use it for arrays as it can lead to unexpected results.

const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for(const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//maps
//map is a collection of key-value pairs where keys can be of any type and values can be of any type. It maintains the insertion order of elements.
//no duplicates allowed in keys, but values can be duplicated.
const map = new Map();
map.set('IN',"india");
map.set('USA',"united states of america");
map.set('FR',"france");
//printing key and value

for(const [key,value] of map){
    console.log(key,':-',value);
}

//iteration on objects

const myObject={
    js: 'JavaScript',
    cpp:'C++',
    python: 'Python',
    rb:'Ruby'
}
//for of doesnt work for objects, so we use for in loop
for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`);
}

//forEach loop: this loop is used to iterate over arrays. It takes a callback function as an argument and executes it for each element in the array.

const coding=["js","cpp","python","rb"];

coding.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
}
);

//array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

users.forEach((user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
);