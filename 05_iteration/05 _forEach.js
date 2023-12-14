const coding = ["js", "ruby", "C", "c++", "Python"]

const values = coding.forEach( (item) => {    //for each does not return any value 
    console.log(item);
})

console.log(values);  //Undefined





const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums1 = myNum.filter((num) => {
    num>4
})                                  //[]
console.log(newNums1); 


const newNums = myNum.filter((num) => {
    return num>4               //[ 5, 6, 7, 8, 9 ]
})
console.log(newNums); 


const newNums2 = myNum.filter((num) => num>4)
console.log(newNums2);             //[ 5, 6, 7, 8, 9 ]



const  newnum = []
myNum.forEach((num) => {
    if(num >4)
    {
        newnum.push(num)     //[ 5, 6, 7, 8, 9 ]
    }
})

console.log(newnum);



