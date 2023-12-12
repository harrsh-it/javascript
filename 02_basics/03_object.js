// litral and constructor  are two way to declare a object

//singleton == Constructor


//object litrals

//Object.create           //Declaration by constructor(Singleton)


const jsUser = {
    name: "Harshit",
    "Full name": "Harshit Sisodia"
    age : 18,
    location : "Jaipur",
    email : "abc@gmail.com",
    isLoggedIN : false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(jsUser.name);   //Not a good method

console.log(jsUser["name"]);
console.log(jsUser["Full name"]);