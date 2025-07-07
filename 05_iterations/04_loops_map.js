// const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// const values=coding.forEach((item) => {
//     return item
// })

// console.log(values); // undefined



const myNums=[1, 2, 3, 4, 5,6, 7, 8, 9, 10];

let newnums=myNums.filter((num)=>num>4)  //filter method returns a new array with elements that pass the test implemented by the provided function..here we didnt open scope
console.log(newnums); // [5, 6, 7, 8, 9, 10]

const newNums=[]

myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
}
);
console.log(newNums); // [5, 6, 7, 8, 9, 10]


// filter method returns a new array with elements that pass the test implemented by the provided function.

const books=[
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publish:"1925"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publish:"1960"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish:"1949"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publish:"1951"
    },
    {
        title: "Brave New World",
        genre: "Dystopian",
        publish:"1932"
    }
]

const userbooks=books.filter( (bk) => bk.genre === "Fiction" && bk.publish < "1950");
console.log(userbooks); // [{ title: 'The Great Gatsby', genre: 'Fiction