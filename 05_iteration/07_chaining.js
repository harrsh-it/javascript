

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNum = myNumbers.map(  (num) => num+10)
console.log(newNum);


const newNum2 = myNumbers
                    .map((num ) => num*10)
                    .map((num) => num+1)
                    .filter((num) => num>= 40)
console.log(newNum2);

