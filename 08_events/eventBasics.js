
//    document.getElementById('owl').onclick = function(){
//     alert("OWL")
//    }

document.getElementById('owl').addEventListener('click',function(e){
    alert ("OWl")
},false)


document.getElementById('owl').addEventListener('click',function(e){
    console.log(e);         //type     //defaultPrevented   //currentTarget  //clientX  //altKey //ctrlKey  
                            //timestamp  //target  //srcElement  //clientY //screenX //screenY   //shiftKey //keyCode
},flase) //defalut is false 


//event Propagation  -- eventBubling  eventcapturing



document.getElementById('images').addEventListener('click',function(e){
    console.log("Click inside the ul");
},false)                                                                  //console-- OWl clicked
                                                                          //          clicked inside the url(Event Bubling)

document.getElementById('owl').addEventListener('click',function(e){
    console.log(" OWl clicked");
},false)



document.getElementById('images').addEventListener('click',function(e){
    console.log("Click inside the ul");
},true)
                                                                            //console -- Clicked insied the url
                                                                            //            owl clicked            (Event Capturing)
document.getElementById('owl').addEventListener('click',function(e){
    console.log(" OWl clicked");
},true)


document.getElementById('owl').addEventListener('click',function(e){
    console.log(" OWl clicked");
    e.stopPropagation()                                                 //console -- Clicked insied the url   
},true)


document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    console.log("google Clicked");
})


document.querySelector('#images').addEventListener('click',function(){
    console.log(e.target.parentNode);
    let removeIt = e.target.parentNode
    removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)
    
},false)


document.querySelector('#images').addEventListener('click',function(e){
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
    removeIt.remove()
    }  
},false)



     
