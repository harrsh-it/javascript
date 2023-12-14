

const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce( function (acc,currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0)

console.log(myTotal);

const myTotal2 = myNums.reduce ((acc, currval) => (acc+currval),0)
console.log(myTotal2);



const shoppingCart = [
    {
        itemName : "js Course",
        price : 29999
    },
    {
        itemName : "python course",
        price : 29900
    },
    {
        itemName : "WebCourse",
        price : 9999
    },
    {
        itemName : "mobile Course",
        price : 9944
    },
]

const price = shoppingCart.reduce( (acc,item) => (acc + item.price),0)
console.log(price);