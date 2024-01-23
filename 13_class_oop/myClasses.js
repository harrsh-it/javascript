class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const harsh = new User("Harshit", "abc@gmail.com", "1234");
console.log(harsh.encryptPassword());
console.log(harsh.changeUserName());

//Behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword1 = function () {
  return `${this.password}abc`;
};
User1.prototype.changeUserName1 = function () {
  return `${this.username.toUpperCase()}`;
};

const harsh1 = new User1("Harshit", "abc@gmail.com", "1234");
console.log(harsh1.encryptPassword1());
console.log(harsh1.changeUserName1());
