const tinderUser =  new Object()  //{}   singlrton
const tinderUser1 = {}          //both are same ways non -  singleton

console.log(tinderUser);    //{}


tinderUser.id = "123abc"
tinderUser.name = "david"
tinderUser.isLogged = false
console.log(tinderUser);   //{ id: '123abc', name: 'david', isLogged: false }


const regularUser = {
    email : "Same@gmail.com",
    fullname:
    {
        userFullname:              //nested object
        {
            firstname : "Harshit",
            lastname : "sisodia"
        }
    
    }
}

console.log(regularUser);                    // email: 'Same@gmail.com',
                                         //fullname: { userFullname: { firstname: 'Harshit', lastname: 'sisodia' } }
console.log(regularUser.fullname);   //{ userFullname: { firstname: 'Harshit', lastname: 'sisodia' } }

console.log(regularUser.fullname.userFullname)   //{ firstname: 'Harshit', lastname: 'sisodia' }
console.log(regularUser.fullname.userFullname?.firstname)  //  ? to check whether any element is present or not  //Harshit





const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3);        //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);           //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign({}, obj1, obj2)  // {} is used to as a target object and obj1 and obj2 as source object 


const obj6 = {...obj1, ...obj2}
console.log(obj6)       //spread the object



const users = 
[
    {
        id : 1,
        email: "h@gmail.com"
    },
    {
        id : 1,                  //array of object
        email: "h@gmail.com"
    },
    {
        id : 1,
        email: "h@gmail.com"
    },

]

console.log(users[1].email);   //h@gmail.com



console.log(tinderUser);
console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLogged' ]  //array
console.log(Object.values(tinderUser)); //[ '123abc', 'david', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'david' ], [ 'isLogged', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged'));   //to check it present or not //true


///Destructuring the object

const course ={
    coursename: "Js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor}  = course   
console.log(courseInstructor);    //hitesh 

const {courseInstructor:instructor}  = course     //destructuring courseInstructor to instructor
console.log(instructor);         //Hitesh  




//JSON

