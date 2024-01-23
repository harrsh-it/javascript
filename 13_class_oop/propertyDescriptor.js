const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const newNewObject = Object.create(null);

const user = {
  name: "Ginger",
  price: 250,
  isAvailable: true,

  UserOrder: function () {
    console.log("User ka code faat gya");
  },
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));

// for (const [key, value] of user) {
//   console.log(`${key} : ${value}`);  ///not iterable
// }

for (const [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`); ///not iterable
  }
}
