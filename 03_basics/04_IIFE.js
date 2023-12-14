//Immediately Invoked Function Expression (IIFE)





//  (function defination) (fun. call) IIFE

(function chai1 ()   //named IIFE
{
    console.log(`DB Connected`);
}
) () ;  //IIFE to get rid global  pollution
        // ; required for end the IIFE



// function chai ()
//   {
//     console.log(`DB Connected`);
//   }
// chai()




//IIFE in arrow

( ( ) => {
    console.log("BD COnnected 2");
}) ();




//IIFE with Argument

( ( name ) => {
    console.log(`DB Connected to ${name}`);
}) ("Harshit");





