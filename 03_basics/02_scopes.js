let a=10
const b=20
var c=30

// {} //scope block
if(true){
    let a=100
    const b=200
    var c=300   //var is function scoped, not block scoped
}

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

//nested scope
function one(){
    const username = "John"

    function two(){
        const website="youtue"
        console.log(username); 
}

//  console.log(website); // ReferenceError: website is not defined
    two();
}

one(); // John...will give error if we try to access website here

//same goes with if else block scope!

//+++++++++++++++++++++++++++interesting+++++++++++++++

addone(5) // 6   //can access
console.log(addone(5)); // 6

// addtwo(6) // 8
// console.log(addtwo(6)); // 8 can not be called before declaration

function addone(num){
    return num+1
}

addone(5) // 6

const addtwo=function(num){ // function expression
    return num+2
}

addtwo(6) // 8