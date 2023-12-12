//array
//mixed datatypes
//resizeable
//copying arrays give shallow copy(same references)



//console -- const numbers  = [1,2,3,4]
//console -- numbers


const myArray =  [0, 1, 3, 2, 1]
const myHeroes = ["Shaktiman", "Ironman", "Thor"]
const myArry2 = new Array(1,234,4,33)

console.log(myArray);       //[ 0, 1, 3, 2, 1 ]
console.log(myArray[0]);    //0


//Array Method 

myArray.push(6)
console.log(myArray);     //  [ 0, 1, 3, 2, 1, 6 ]
myArray.push(7)           //  [ 0, 1, 3, 2, 1, 6, 7 ]

myArray.pop();              ////  [ 0, 1, 3, 2, 1, 6 ]
console.log(myArray); 

myArray.unshift(0)          /// add 0 at the beginning
console.log(myArray);       //[0, 0, 1, 3, 2, 1, 6]



myArray.shift();         //remove element at beginning
console.log(myArray);    //[ 0, 1, 3, 2, 1, 6]



console.log(myArray.includes(8));   //false 
console.log(myArray.indexOf(8));    //-1
console.log(myArray.indexOf(3));    //2



const newArray  =  myArray.join()
console.log(newArray);               // join both the array   
console.log(typeof newArray);        //String
console.log(newArray);               //string  0,1,3,2,1,6



//Slice, Splice

console.log("A ",myArray);             //A  [ 0, 1, 3, 2, 1, 6 ]

const myArray3 = myArray.slice(1,3)     // includes from index 1 to 2 not 3
console.log(myArray3);                   //[ 1, 3 ]

console.log("B ",myArray);              //B  [ 0, 1, 3, 2, 1, 6 ]

const myArray4 =  myArray.splice(1,3)      //  include from 1 index to 3
console.log(myArray4);                     // [ 1, 3, 2 ]

console.log("C ",myArray);                //C  [ 0, 1, 6 ]  Splice also cutoff the element from the original array

