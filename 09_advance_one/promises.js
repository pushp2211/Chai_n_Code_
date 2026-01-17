//creating promises
const promiseOne= new Promise(function(resolve,reject){
//do an asynchronous task
//DB calls,crypto,network

setTimeout(function(){
    console.log("Async task is completed")
    resolve()
},1000);
});

//consume the promise

promiseOne.then(function(){
    console.log("Promise is consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed")
        resolve()
    },1000);
}).then(function(){
    console.log("Promise 2 is consumed")
})

promiseThree= new Promise(function(resolve,reject){ //returning data from promise
    setTimeout(function(){
        resolve({userName:"Raj",userId:1}) //returning object
    },1000);
})

promiseThree.then(function(user){  //consuming data from promise
    console.log(user) //{userName:"Raj",userId:1}
})




//handling errors in promise
//imp syntax in database connections and network calls

promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
    let error=false;
    if(!error){
        resolve({userName:"Raj",userId:1})
    }else{
        reject("Error:Something went wrong")
    }
},1000)
})

promiseFour.then(user=>{
    console.log(user);
    return user.userId;
}).then((userId)=>{
    console.log("User id is:",userId)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Promise is either resolved or rejected")
});


const PromiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Five resolved")
    },1000)
});

async function consumePromiseFive(){
    try{
        let result= await PromiseFive;
    console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();


async function getAllUsers(){
    try{
        let response= await fetch("https://jsonplaceholder.typicode.com/users");
        let data= await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error:",error);
    }
}

getAllUsers(); //fetching data from API using async/await


fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error:", error);
});