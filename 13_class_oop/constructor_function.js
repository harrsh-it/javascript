// const promiseOne = new Promise()  //"new" is constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn= isLoggedIn

    return this
}

// const userOne =  User("harsh",3,true)
// const userTwo = User("harshit",13,true)  //OverWrite all of the value
// console.log(userOne);

//solution
const userOne = new  User("harsh",3,true)
const userTwo =  new User("harshit",13,true)

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);  //[Function: User]
