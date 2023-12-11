// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console (2==1);
// console.log(2!= 1);



console.log("2" > 1);       //true 
console.log("02" > 1);     //true




console.log(null > 0);      //false
console.log(null == 0);    //false 
console.log(null >= 0);   //true (comparison convert a null toa number treating it as 0) & (== and > < >= <= work differently)

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false
console.log(undefined < 0);    //false

// ===    =>it also check data types and then do comparison

console.log("2" === 2);  // false strictly