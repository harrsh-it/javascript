// for loop 

for (let i = 0; i < 10; i++) {
    const element =  i;
    console.log(element);
}


for (let i = 0; i < 10; i++) {
    const element =  i;
    if(element == 5){
        console.log("5 is best");
    }else
    console.log(element);
}



for(let i=0; i<=10; i++)
{
    for(let j=0; j<=10; j++)
    {
        console.log(`${i}, ${j}`);
    }
}


let myArray = ["Flash", "Batman", "Superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}



//break and continue


for (let index = 1; index <= 20; index++) {
    if(index == 5)
    {
        console.log(`Detected 5`);
        break;                                 //Suspend the loop and throw out off the loop
    }
    console.log(`Value of i is ${index}`);  
}



for (let index = 1; index <= 20; index++) {
    if(index == 5)
    {
        console.log(`Detected 5`);
        continue;                                //Suspend current itreation and increase index
                                                // by 1 and loop will continue again
    }
    console.log(`Value of i is ${index}`);
}

