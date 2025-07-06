//Immeiately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.

function chai(){
    console.log("DB CONNECTED");
}
chai()

//then why needed: to avoid global scope pollution

(function chai2 (){
    //named iife
console.log("DB CONNECTED");
})();  //IIFE..here semicolon is important to avoid errors in some cases

//
((name)=> {
    //unnamed iife
    console.log(`DB CONNECTED ${name}`);
})(`pushpraj`);
