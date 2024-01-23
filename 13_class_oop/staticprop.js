class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    //dont want to give access to all instances
    return `123`;
  }
}

const user1 = new user("Harsh");
// console.log(user1.createId());

class Teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacher1 = new Teacher("Ankit", "ankit@gmail.com");
teacher1.logMe();
// console.log(teacher1.createId());   cant access
