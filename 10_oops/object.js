function multiply(num){
    return num*5;
}

multiply.power=2;
console.log(multiply(3)); // 15
console.log(multiply.power); // 2
//function is also an object in JavaScript and can have properties and methods just like other objects.
console.log(multiply.prototype);


function createuser(usernamer,score){
    this.usernamer=usernamer;
    this.score=score;
}
//this keyword refers to the object that is executing the current function.

createuser.prototype.increment=function(){
    this.score++;
}

const user1=new createuser("user1", 10);
user1.increment();
console.log(user1.score); // 11

//new keyword creates a new object and sets this to that object.
const user2=new createuser("user2", 20);
user2.increment();
console.log(user2.score); // 21

//this decides the context based on how the function is called.