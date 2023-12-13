const user =  {
    username : "Harsh",
    price : 200,

    welcomeMessage : function()
    {
        console.log(`${this.username}, welcome to Website`);  //this keyword use for refernig current context


         console.log(this);     /*  {           
                                    username: 'Harsh',    (before writing 23 th line)
                                    price: 200,
                                    welcomeMessage: [Function: welcomeMessage]
                                    }     */
           
           
           
    }

}

user.welcomeMessage()  //Harsh, welcome to Website  
                                                      /*  {           
                                                      username: 'Harsh',    (before writing 23 th line)
                                                     price: 200,
                                                     welcomeMessage: [Function: welcomeMessage]
                                                     }  */   





user.username = "sam"  //we are chsnging the value in object so in console this refere to current context so 
user.welcomeMessage()  // it will change sam, welcome to Website
                       /*{
                            username: 'sam',
                            price: 200,
                            welcomeMessage: [Function: welcomeMessage]
                            } */

console.log(this );    //{}



function chai(){
    console.log(this.username);  //Undefine this is working in object
}

chai()



const chai2 = function()
{
    let username = "harsh"
    console.log(this.username)
}
chai2()             //Undefine


//Arrow 

const chai3 = () => {
    let username = "harsh"
    console.log(this.username)   //undefined
}
chai3()


//Explicit return
const addTwo =  (num1, num2) => {
    return num2 +num1
}
console.log(addTwo(3,5));



//Implicit return
const addTwo2 =  (num1, num2) =>  num2 +num1

console.log(addTwo2(3,5));     //8



const addTwo3 =  (num1,num2) => ({username : "harsh"}) //returning object by implicit return
console.log(addTwo3(2,4));





