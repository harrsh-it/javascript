const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")     //storing all buttons and body in variable

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
      //  console.log(e.target);    target to get about the id
      
      
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }


        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }



        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }


        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }

    })
})
