const user = {
    username: "Harsh",
    loginCount : 8,
    singedIn : true,

    getuserDetailes: function(){
        console.log(`Username: ${this.username}`); //harsh
        console.log(this);//user keys and values
        }
}


console.log(user.username);
console.log(user.getuserDetailes());
console.log(this);  //{}