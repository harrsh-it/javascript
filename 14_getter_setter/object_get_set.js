const User = {
  _email: "H@s.com",
  _password: "abs",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this.email = value;
  },
};

const User1 = Object.create(User);
console.log(User1.email);
