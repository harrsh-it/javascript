const marvel_heroes = ["Thor", "Spiderman", "Ironman"]
const dc_heroes  = ["Superman", "Batman", "Flash "]

// marvel_heroes.push(dc_heroes)  
// console.log(marvel_heroes);   //[ 'Thor', 'Spiderman', 'Ironman', [ 'Superman', 'Batman', 'Flash ' ] ]


console.log(marvel_heroes[3]);   //[ 'Superman', 'Batman', 'Flash ' ]
// console.log(marvel_heroes[3][1]);  //Batman



const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);      //[ 'Thor', 'Spiderman', 'Ironman', 'Superman', 'Batman', 'Flash ' ]
console.log(allHeroes[3]);




const allNewHeroes  =   [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);         //for spreading all of the element of array 



const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5,]]]
const realAnotherArray = another_array.flat(Infinity)
console.log(realAnotherArray);                           //   [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]
   


console.log(Array.isArray("Harshit"));   //false
console.log(Array.from("Harshit"));      //['H', 'a', 'r', 's', 'h', 'i',t]
    
  
console.log(Array.from({name: "HArhit"}));   //[]


let score = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score, score1, score2));   //[ 100, 200, 300 ]