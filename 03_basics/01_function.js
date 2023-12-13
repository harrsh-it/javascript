
function sayMyName ()
{
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");

}
sayMyName()    //function call



function addTwoNum (num1,num2) //parameters 
{
   console.log( num1+num2);
}
addTwoNum(2,4)           //argument
addTwoNum(2,"4")        //24
addTwoNum(3, null)     //3





function addTwoNum1 (num1,num2) //parameters 
{
   let result = num1+num2
   return result
   console.log("Harsh")   // not print bcoz after return
}
const result = addTwoNum1(2,4)
console.log("Result: ",result);



function loginUserMessage(username)
{
    return `${username} just logged in`
}

console.log(loginUserMessage("Harshit"));
console.log(loginUserMessage());           //undefined



function loginUserMessage2(username ="SAM")
{
    return `${username} just logged in`
}

console.log(loginUserMessage2());            //SAM just logged in
console.log(loginUserMessage2("Harshit"));   //Harshit just logged in





function calculateCartPrice(...num)   //rest operator
{
    return num
}
console.log(calculateCartPrice(200, 400, 500));     //[ 200, 400, 500 ]


function calculateCartPrice1(val1, val2, ...num)   //rest operator
{
    return num
}
console.log(calculateCartPrice1(200, 400, 500));   //[500]




//object in function 
const user = {
    username : "Harshit",
    price  :  199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)     //Username is Harshit and price is 199



//array in function
const myNewArray = [200,400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));   //100

console.log(returnSecondValue([200, 400, 500, 600]));  //500



const addTwo =  function(num)
{
    return num + 2
}
console.log(addTwo(5));



console.log(addOne(5));   // 6

function addOne(num)
{
    return num+1;
}



console.log(addThree(3));     //ERROR

const addThree =  function(num)
{
    return num + 2
}