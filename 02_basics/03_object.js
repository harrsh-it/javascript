// litral and constructor  are two way to declare a object

//singleton == Constructor


//object litrals

//Object.create           //Declaration by constructor(Singleton)


const mySym = Symbol("Key1")
const mySym2 = Symbol("Key2")



const jsUser = {
    name: "Harshit",
    "Full name": "Harshit Sisodia",   //n js keys i.e, name, age, full name are treated as string 
    age : 18,
    location : "Jaipur",
    email : "abc@gmail.com",
    isLoggedIN : false,
    lastLoginDays: ["Monday", "Saturday"],

    mySym : "myKey1",
    [mySym2] : "myKay2"  // right way for symbol
}


console.log(jsUser.name);   //Not a good method

console.log(jsUser["name"]);
console.log(jsUser["Full name"]);


console.log(jsUser.mySym);     //myKey1  (not a symbol datatype)
console.log(typeof jsUser.mySym);   //string


console.log(jsUser[mySym2]);   //myKey2
console.log(jsUser); // now symbol also mention in the object




jsUser.email = "Harshit@"    //changing the value
Object.freeze(jsUser.email)        //can not do any changes in object email




jsUser.greeting  = function()
{
    console.log("Hello");

}

console.log(jsUser.greeting);  //[Function (anonymous)] (functionreference)
console.log(jsUser.greeting())   //Hello


jsUser.greetingTwo = function()
{
    console.log(`Hello js user,${this.name}`);
}


console.log(jsUser.greetingTwo())   //Hello js user,Harshit


