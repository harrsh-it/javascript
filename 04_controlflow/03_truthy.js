

//Here assuming the variable with asssigned value is true else false


const userEmail =  "H@.ai"  //[]

if(userEmail)
{
    console.log("Got Email");            //got Email
}
else 
{
    console.log("Dont have email");
}




const userEmail2 =  ""

if(userEmail2)
{
    console.log("Got Email");
}            
else 
{
    console.log("Dont have email");  //Dont have email
}




//falsy values  (acts as false value)
//false, 0, -0, BigInt 0n, ' ', " ", null, undefined, NAN


//Truthy Values (Acts as True value)
// "0", 'false', " ", [], {}, function(){}, 



const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}
