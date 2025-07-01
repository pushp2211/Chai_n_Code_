const marvelHero= ["thor", "iron", "hulk", "spiderman"]
const dcHero= ["batman", "superman", "flash"]

marvelHero.push(dcHero)// Adds dcHero array as a single element to marvelHero
console.log(marvelHero) // Output: [ 'thor', 'iron', 'hulk', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

marvelHero.concat(dcHero) // Combines marvelHero and dcHero arrays
console.log(marvelHero) // Output: [ 'thor', 'iron', 'hulk', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

const allHeroes=[...marvelHero, ...dcHero] // Combines both arrays into a new array
console.log(allHeroes) // Output: [ 'thor', 'iron', 'hulk', 'spiderman', 'batman', 'superman', 'flash' ]


//falttening array
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(another_array.flat(Infinity)) // Flattens the array by infinite levels level



console.log(Array.isArray("pushpraj")) // Output: false (because it's a string, not an array);
console.log(Array.from("pushpraj")) // Output: [ 'p', 'u', 's', 'h', 'p', 'r', 'a', 'j' ] (converts string to array)
console.log(Array.from({name: "pushpraj"})) // Output: [ 'name', 'pushpraj' ] (converts object to array of key-value pairs)

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3)) // Output: [ 100, 200, 300 ] (creates an array from the arguments)