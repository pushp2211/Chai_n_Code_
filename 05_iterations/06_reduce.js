//reduce: it executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const arr=[1, 2, 3, 4, 5];
const sum=arr.reduce(function(accumulator, currentValue){    //may remove function using arrow function 
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue;
}
, 0); // the second argument is the initial value of the accumulator


console.log(sum); // 15

//using arrow function
const sum2=arr.reduce((accumulator, currentValue) => accumulator + currentValue, 11); // the second argument is the initial value of the accumulator
console.log(sum2); // 26


//behind the scenes, the reduce method is doing this:
// let accumulator=0;
// for(let i=0; i<arr.length; i++){
//     accumulator += arr[i];
// }


//reduce with objects
const books=[
    {       title: "The Great Gatsby",  
            genre: "Fiction",
            publish: "1925"
    },
    {       title: "To Kill a Mockingbird",
            genre: "Fiction",
            publish: "1960"
    },
    {       title: "1984",
            genre: "Dystopian",
            publish: "1949"
    },
    {       title: "The Catcher in the Rye",
            genre: "Fiction",
            publish: "1951"
    }
]
//adding publish years of all books

const totalPublishYears = books.reduce((accumulator, book) => {
    return accumulator + parseInt(book.publish);
}
, 0); // the second argument is the initial value of the accumulator
console.log(totalPublishYears); // 1985