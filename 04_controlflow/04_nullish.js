//Nullish Coalescing Operator (??) : null, undefined


let val1, val2, val3, val4;

val1 =  5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 3
val4 =  null ?? 10 ?? 20

console.log(val1);   //5
console.log(val2);   //10
console.log(val3);   //3
console.log(val4);   //10


//Terniary operator
//condition ? true : false

const Ice = 100;

Ice >= 80 ? console.log("Less than 200") : console.log("More than 800");