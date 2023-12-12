//console == Number.

const score = 400
console.log(score);                //400

const balance =  new Number(100)
console.log(balance);            // [Number:400]


console.log(balance.toString());          //100(string)
console.log(balance.toString().length)   //3

console.log(balance.toFixed(2));  //100.00


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  //23.9


const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));  //124


const otherNumber2 = 23.8966
console.log(otherNumber2.toPrecision(4)); // 23.90

const otherNumber3 = 123.8966
console.log(otherNumber3.toPrecision(3));  //124




const hundreds =  100000000000
console.log(hundreds.toLocaleString());         //100,000,000,000
console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,00,00,000


// **************************** MATHS ****************************
console.log('**************************** MATHS ****************************');
//console  ==  console.log(Math);

console.log(Math);            //object

console.log(Math.abs(-3));            //3
console.log(Math.round(4.3));         //4
console.log(Math.ceil(4.2));          //5
console.log(Math.floor(4.9));         //4  
console.log(Math.min(3,6,4,987));     //987
console.log(Math.min(3,5,7,443,3));   //3

console.log(Math.random());                            //random  values b/w 0 and 1   adding 1 to avoid 0
console.log((Math.random()*10) + 1);                  //random number b/w 1 and 10 10 also include 
console.log((Math.random()*6)  + 1);                  // random value b/w 1 and  6 6 also include
console.log(Math.floor((Math.random()*6))  + 1);       // random value b/w 1 and  6 6 also include


const min =  10;
const max = 20; 



console.log(Math.floor(Math.random() * (max - min + 1)) + min);   // gave no. b/w min and max