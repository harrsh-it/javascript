// class User {
//   constructor(email, password) {
//     (this.email = email), (this.password = password);
//   }

//   get password() {
//     return this.password.toUpperCase();
//   }                                                     /// Maximum call stack size exceeded

//   set password(value) {
//     this.password = value;
//   }
// }

// const user1 = new User("HArsh@gmail.com", 123);
// console.log(user1.password);

//SOLUTION

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password} `;
  }

  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }
}

const user1 = new User("HArsh@gmail.com", "abs");
console.log(user1.password);

const user2 = new User("HArsh@gmail.com", "abs");
console.log(user2.email);
