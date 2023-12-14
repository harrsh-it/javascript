// if statement 

// if(condition==true) {
// }


// <, >, <=, >=, ==, !=, ===, !==

const  isUserLoggedIn = true

if(isUserLoggedIn)
{
    console.log("Hi I am logged in.");
}



const temp = 50
if(temp>40)
{
    console.log("temperature is more than 40");
}
 


if(temp >40)
{
    console.log("more than 40");

}
else 
{
    console.log("less than 40");
}



const score = 200

if(score >100)
{
    const power = 'fly'
    console.log(`User power ${power}`);
}
//console.log(`User power ${power}`);   //can not access



const balance =  1000

if(balance >500) console.log("Text");

if(balance >500) console.log("Test"), console.log("Test2");   //not good idea


if(balance < 500)
{
    console.log("Less than 500");
}
else if (balance < 750)
{
    console.log("Less than 750");
}
else 
{
    console.log("more  than 900");
}




const userLoggedIn =  true
const debitcard = true

if(userLoggedIn  && debitcard)
{
    console.log("Allow to buy course");
}