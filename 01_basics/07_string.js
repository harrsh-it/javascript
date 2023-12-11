const name = "Harshit"
const repoCount = 50
console.log(name + repoCount + " done")   //Odd method


const gameName =  new String ("harsh")  //string declare

//new Method (String Interpolation)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


console.log(gameName [0]);
console.log(gameName.__proto__);



console.log(gameName.length);           //5
console.log(gameName.toUpperCase());   //HARSH
console.log(gameName.charAt(3));      //s 
console.log(gameName.indexOf('h'));  //0



const newString = gameName.substring(0,3)   //last value will not be included
console.log(newString);


const anotherString = gameName.slice(0,3)
console.log(anotherString);

const anotherString1 = gameName.slice(-3,1)
console.log(anotherString1);



const newStringOne = "       Harsh     "
console.log(newStringOne.trim());


const url = "https//google.com/%20youtube"
console.log(url.replace('%20','-'));       //https//google.com/-youtube
console.log(url.includes('youtube'));      // true


const nameOne = "Reet Seerat Harsh Sisodia"
console.log(nameOne.split(' '));