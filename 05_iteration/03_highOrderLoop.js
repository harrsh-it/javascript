

//   Array Specific loop


// ******************for of************************************


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);     //1,2,3,4,5   
}


const greeting = "Hello World"

for (const i of greeting) {
    console.log(i);
}


const myObject = {
    'game1' : 'NFS',
    "game2" : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, '-',value);        //Not iterable
// }



// ********************************* for in ************************************************


// for in loop also work with array

 const myObject2 = {
    js : "javascript",
    cpp :"C++",
    rb : "ruby",

}

for (const key in myObject2) {
   console.log(key);        //js cpp rb
}

for (const key in myObject2) {
    console.log(myObject2[key]);     // javascript c++ ruby    
 }



 const program = ["A", "B", "C", "D"]
for (const key in program) {
    console.log(key);       // 0,1,2,3
}


//*************************for each****************************


const coding = ["js", "ruby", "C", "c++", "Python"]

coding.forEach(  function (item){    // for item array element will be the parameter
    console.log(item);
} )

coding.forEach( (item) => {
    console.log(item);
})


function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )



const myCoding =[
    {
        languageName : "Js",
        fileName : "JSS"
    },

    {
        languageName : "Java",
        fileName : "Jav"
    },

    {
        languageName : "python",
        fileName : "py"
    }
]


myCoding.forEach( (item) => {     
    console.log(item);           /* { languageName: 'Js', fileName: 'JSS' }
                                    { languageName: 'Java', fileName: 'Jav' }
                                    { languageName: 'python', fileName: 'py' } */
                                   
    
})

myCoding.forEach( (item) => {
    console.log(item.fileName);   //JSS Jav py
})

myCoding.forEach( (item) => {
    console.log(item.languageName);   //Js Java Python
})

