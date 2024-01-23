function setuserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setuserName(username);
  this.email = email;
  this.password = password;
}

const data = new createUser("HARSHIT", "abc@gmail.com", "123");
console.log(data); //createUser { email: 'abc@gmail.com', password: '123' }
//only email and password get set but username not get set
// "setusername" function get call but can't set the value

//solution

function setuserName1(username) {
  this.username = username;
}

function createUser1(username, email, password) {
  setuserName1.call(this, username);
  this.email = email;
  this.password = password;
}

const data1 = new createUser1("HARSHIT", "abc@gmail.com", "123");
console.log(data1);
