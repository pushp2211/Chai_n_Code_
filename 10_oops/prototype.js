//protottype
//adding a property to String prototype
//truelength is not a standard property of string, it's added via prototype
 String.prototype.truelength=function(){
    return this.trim().length;
}

 let myname="pushpraj     ";
 console.log(myname.truelength()); // 8


 //inheritance using prototype
function Animal(name){
    this.name=name;
}

Animal.prototype.speak=function(){
    console.log(this.name + ' makes a noise.');
}

const dog=new Animal('Dog');
dog.speak(); // Dog makes a noise.
//speak method is inherited from Animal prototype


//connecting two objects using prototype

const parentObj={
    greet:function(){
        console.log("Hello from parent object");
    }
};

const childObj=Object.create(parentObj);
childObj.greet(); // Hello from parent object
//childObj inherits greet method from parentObj via prototype chain