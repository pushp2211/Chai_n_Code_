//object literal

let person = {
    name: 'John',
    age: 30,
    signedIn:true,

getUserDetails: function() {
    console.log("User details")
}
}

console.log(person.name);
console.log(person.getUserDetails()); 

//object constructor

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    return this; // implicit return of this
}

const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.make);

//new keyword: new creates a new empty object, sets the value of this to that object, and returns the object from the function.
//if new is not used, this will refer to the global object (window in browsers) and properties will be added to the global scope, which is not de sired.