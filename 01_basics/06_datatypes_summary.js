//  # Primitive datatypes (allocate the copy of memory reference)

// 7 types -- String, Number, Boolean, Null, undefined, Symbol, BigInt



// # Reference Type (Non-Primitive data)  allocate the memory reference directly

// Types -- Array, Objects, Functions

const heros = ["shaktiman", "Ironman","thor"]   //array

let myObj={
    name: "Harsh",     //object
    age: 22,
}

const myFunction = function(){     //function
    console.log("Hello World");
}
console.log(myFunction);         // object function





//javascript is Dynamical language


const score = 100          //number
const scoreValue = 100.3   // also came under the categories of number 

const isLoggedIn = false
const outSideTemp = null  //null is not zero

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);     //False(value will never be same of any two symbol)

const bigNumber = 123456n





// ******************************** Memory **********************

// stack (Primitive)--copy of value, so the original value does not change
// heap (Non-primitive ) -- Original reference value, so the priginal value get change

 
