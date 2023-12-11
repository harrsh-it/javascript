let score = "33"

console.log(typeof score);      //string
console.log(typeof (score));   //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);         //33




let score1 = "33abc"   

console.log(typeof score1);      //string
console.log(typeof (score1));   //string

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);  //number
console.log(valueInNumber1);         //it gave NaN(not a number but type of NaN is number )




let score2 = null

console.log(typeof score2);      //object
console.log(typeof (score2));   //object

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);  //number
console.log(valueInNumber2);         //it gave 0





let score3 = undefined

console.log(typeof score3);      //undefined
console.log(typeof (score3));   //undefined

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);  //number
console.log(valueInNumber3);         //it gave NaN




let score4 = false

console.log(typeof score4);      //boolean
console.log(typeof (score4));   //boolean

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);  //number
console.log(valueInNumber4);         //it gave 0 or 1 for true




let score5 = "harshit"

console.log(typeof score5);      //string
console.log(typeof (score5));   //string

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);  //number
console.log(valueInNumber5);         //it gave NaN



// "33"     -- 33
// "33abc"  -- NaN
// true     -- 1
// false    -- 0



let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);    //true

// 0         -- false
// ""        -- false
//"Harshit"  -- true



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);             //33
console.log(typeof stringNumber);     //string




//********************************************** Operation ********************************
console.log("*********************************** Operation ********************************")

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1="Hello"
let str2="Harsh"
let str3=str1+str2
console.log(str3);


console.log("1"+2);         //12
console.log(1+"2");        //12
console.log("1" + "2");    //12

console.log("1" +2 +2) ;     //122
console.log(1 +2 + "2")     //32

console.log(3*4*5%3);    //0

console.log(+true);          //1
// console.log(true+);      //Error

console.log(+"")     //0


let num1, num2, num3
num1 = num2 = num3 = 3


let gameCounter = 100;
gameCounter++;
console.log(gameCounter)


