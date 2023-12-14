//Maps  (Object)

const map = new Map()
map.set('UP', 1)       //duplicate not allow and insertion order will be the order for storing key and value in map
map.set('UK', 2)       
map.set('MP', 3)
console.log(map);

for (const key of map) {
    console.log(key);     //[ 'UP', 1 ] [ 'UK', 2 ] [ 'MP', 3 ]
    
}

for (const [key,value] of map) {     //UP - 1 UK - 2 MP - 3
    console.log(key, '-', value);     
    
}


for (const key in map) {
    console.log(key);       //not iterable
}