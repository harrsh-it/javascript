//The promises object represent the eventual completion of an asynchronous operation and its resulting value
//       3- states
//--pending: initial sate, neither fulfilled nor rejected\
//--fulfilled : meaning that the operation was completed successfully
//-- rejected : meaning that the operation failed
//promises is object


const promiseOne = new Promise(function(resolve, reject){
    //DO an async task db calls, croptography
    
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)


})   //creating promises

promiseOne.then(function(){
    console.log("Promise consumed");  //promise consume
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 is consumed");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({Usename : "Harshit", email : "harshit@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = false
        if(!err){
            resolve({Username : "harshit", pass : "1234"})
        }
        else 
            reject('Error: Something Went wrong')
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.Username
})
.then((Username) => {
    console.log(Username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolve or rejected"))


const promiseFive = new Promise((resolve,reject) =>{
    setTimeout(function(){
        let err = false
        if(!err){
            resolve({Username : "JAVASCRIPT", pass : "1234"})
        }
        else 
            reject('Error: JS Went wrong')
    },1000)
})

async function consumePromiseFive(){
   const response =  await promiseFive
   console.log(response);
}
consumePromiseFive()





const promiseSix = new Promise((resolve,reject) =>{
    setTimeout(function(){
        let err = true
        if(!err){
            resolve({Username : "JAVASCRIPT", pass : "1234"})
        }
        else 
            reject('Error: JS Went wrong')
    },1000)
})

async function consumePromiseSix(){
   try {
        const response =  await promiseSix
        console.log(response);
   } catch (error) {
        console.log(error);
   }
}
consumePromiseSix()


async function getAllUser(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data =await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}
getAllUser()





fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))  