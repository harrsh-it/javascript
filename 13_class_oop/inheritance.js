class user {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`USERNAME Is ${this.userName}`);
  }
}

class Teacher extends user {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course is add by ${this.userName}`);
  }
}

const user1 = new Teacher("Harsh", "harsh@gmail.com", 132);
user1.addCourse();

const user2 = new user("Harsh2");
user2.logMe();

console.log(user1 === user2); //false
console.log(user1 === Teacher); //false
console.log(user1 instanceof Teacher); //true
