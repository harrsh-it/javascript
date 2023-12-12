// dat is object (januany 1, 1970,)


let myDate = new Date()
console.log(myDate.toString());      //Tue Dec 12 2023 15:26:30
console.log(myDate.toDateString());  //Tue Dec 12 2023

console.log(typeof myDate);          //object


let myCreatedDate  = new Date(2023, 11, 12)    //MOnths start from 0 
console.log(myCreatedDate.toString());


let myCreatedDate1  = new Date(2023, 11, 12,5,34)  
console.log(myCreatedDate1.toString());            //Tue Dec 12 2023 05:34:00


let myCreatedDate2  = new Date("2023-01-14")  
console.log(myCreatedDate2.toString());          //Sat Jan 14 2023 00:00:00 GMT+0000


let myTimeStamp = Date.now();
console.log(myTimeStamp);                       //1702395384459
console.log(myCreatedDate2.getTime());          //1673654400000 now compare to get time



console.log(Math.floor(Date.now()/1000));     //gave seconds


let newDate =  new Date()
console.log(newDate.getDate());     //12  
console.log(newDate.getDay());      //2


newDate.toLocaleString('default',{
    weekday:"long"
    
})



