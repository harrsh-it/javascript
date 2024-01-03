//generate random colors

const randomColor = function(){
    const hex ='123456789ABCDEF' 
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() *10)];
    }
    return color
};

let intervalId;
const startChangingColor = function(){
    if(!intervalId){
    intervalId = setInterval(changeBgColor,100);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}


document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)


