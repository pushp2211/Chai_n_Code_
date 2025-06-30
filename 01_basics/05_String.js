const name="Pushpraj";
const repocount=10;

console.log(name+ repocount+" value");

console.log(`My name is ${name} and I have ${repocount} repositories.`); //suggested to use backticks  

const gameName=new String("Cricket"); //another way to declare a string
console.log(gameName); 

console.log(gameName.__proto__); //accessing prototype of the string object


console.log(gameName.length); 
console.log(gameName.toUpperCase()); //convert to uppercase
console.log(gameName.toLowerCase()); //convert to lowercase
console.log(gameName[0]); //accessing first character
console.log(gameName.indexOf("C")); //find index of character
console.log(gameName.slice(-3,3)); //slice the string from index 0 to 3
console.log(gameName.replace("Cricket", "Football")); //replace a substring
console.log(gameName.charAt(3)); //get character at index 3

const newString=gameName.substring(0, 3); //get substring from index 0 to 3
console.log(newString);

console.log(gameName.trim()); //remove whitespace from both ends

const url="https://www.example.com";

console.log(url.replace("%20", " ")); //replace %20 with space

console.log(url.split('.')); //split the string by dot