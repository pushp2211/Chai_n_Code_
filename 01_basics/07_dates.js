//temporal API

let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
//date is object
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());

let myCreateDate=new Date(2023, 0, 1, 10, 30, 0); // year, month (0-11), day, hours, minutes, seconds
console.log(myCreateDate.toDateString());

let myCreateDate2=new Date("2023-01-01"); // ISO 8601 format
let myCreateDate3=new Date("01-01-2023"); // MM-DD-YYYY format

console.log(myCreateDate3.toDateString());

let myTimeStamp=Date.now(); // current timestamp in milliseconds
console.log(myTimeStamp);

console.log(myCreateDate.getTime()); // timestamp of myCreateDate

console.log(Math.floor(myCreateDate.getTime() / 1000)); // timestamp in seconds

// get date components
let newerDate=new Date();
console.log(newerDate.getMonth()+1); // month (0-11)
console.log(newerDate.getFullYear()); // full year
console.log(newerDate.getDate()); // day of the month (1-31)


// get date components with locale formatting
newerDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
})