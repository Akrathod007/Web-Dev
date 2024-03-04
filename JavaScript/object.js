console.log("HI....");

//object:
// let rectangle = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("Draw");
//   },
// };

// console.log(rectangle.length);
// console.log(rectangle.breadth);
// console.log(rectangle.draw());

// //Object create using factory function:

// function createRectangle(length, breadth) {
//   return (rectangle = {
//     length: length,
//     breadth: breadth,
//     draw: function () {
//       console.log("Draw");
//     },
//   });
// }

// let rectangle1 = createRectangle(1, 2);
// let rectangle2 = createRectangle(2, 3);

// console.log(rectangle1);
// console.log(rectangle2);

// Object create using constructor function:
// always use pascal notation -> first letter of every word is capital -> NumberOfstudent
// constructor function is used to intialise and define of properties and methods.
console.log("Object create uisng constructor function");

function Rectangle() {
  this.length = 1; //this keyword refers current object
  this.breadth = 2;
  this.draw = function () {
    console.log("Draw");
  };
}

let obj1 = new Rectangle(); //new keyword create empty object
console.log(obj1);
// console.log(obj1.length);
// console.log(obj1.breadth);
// console.log(obj1.draw());

//Dynamic Nature of object:

obj1.color = "yellow";
console.log(obj1);
delete obj1.color;
console.log(obj1);
console.log(Rectangle.arguments);

// for in and for of loop:

let fullName = {
  firstName: "Ansh",
  lastName: "Rathod",

  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// for (let key in fullName) {
//   console.log(key, fullName[key]);
// }

// for (let key of Object.keys(fullName)) {
//   console.log(key);
// }
// for (let key of Object.entries(fullName)) {
//   console.log(key);
// }
// let fruits = ["apple", "banana", "kiwi"];

// for (let key of fruits) {
//   console.log(key);
// }

if ("age" in fullName) {
  console.log("Present");
} else {
  console.log("Not present");
}

//Object Cloning:
//1) iteration:
let object1 = {};
for (let key in fullName) {
  object1[key] = fullName[key];
}

console.log(object1);

// 2) assign:
let object2 = Object.assign({}, fullName);
console.log(object2.firstName);

//3) spread operator:

let object3 = { ...fullName };
console.log(object3.lastName);
