


if (true){
    let a = 10
    const b = 20
    var c = 30
    d = 40
}
console.log(a);   //not print
console.log(b);   //not print 
console.log(c);  //30 got print  work as global variable 
console.log(d);  //40 got print 


//Nested Scope

function one()
{
    const username = "hitesh"

    function two()
    {
        const website = "youtube"
        console.log(username);    //Hitesh
    }
    console.log(website);   //ERROR

    two()
}

one()





