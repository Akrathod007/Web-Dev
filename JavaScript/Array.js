//creation:

// let num = [2, 4, 6, 8];
// console.log(num);
//Insert:
// console.log("insert at End index");
// num.push(3);
// console.log(num);

// console.log("insert at beginning index");
// num.unshift(10);
// console.log(num);

// console.log("insert at middle one index");
// num.splice(2, 0, "X", "Y", "Z");
// console.log(num);

//searching:
// console.log(num.indexOf(0));
// console.log(num.includes(8));

//Array of Objects:
/*
let student = [
  {
    no1: 1,
    Name: "Ansh",
  },
  {
    no1: 2,
    Name: "Raj",
  },
  {
    no1: 3,
    Name: "Rohan",
  },
];
console.log(student);
*/

// console.log(student.indexOf({ no1: 2, Name: "Raj" })); //it will not work on diffrent object

/*Callback function: A callback function passed into another functionn as an argument, which is then invoked
inside the outer function to complete some kind of routine or action.
*/

/*
console.log(
  student.find(function (s) {
    return s.Name === "Rohan";
  })
);
*/

//Arrow fuction:
// let s = student.find((s) => s.Name === "Rohan");
// console.log(s);

//Removing Element:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// let numbers2 = numbers;
/*
console.log(numbers.pop()); // end
console.log(numbers);
console.log(numbers.shift()); //Beginning
console.log(numbers);
console.log(numbers.splice(4, 1)); // Middle one
console.log(numbers);
*/

//Emptying an Array:
// (1):
// numbers = []; // one issue with it
// (2):
// numbers.length = 0;
// (3):
// numbers.splice(0, numbers.length);
// (4):
/*
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);
console.log(numbers2);
*/

//Combining & slicing arrays:
/*
let first = [1, 3, 5];
let second = [2, 4, 6];
let combine = first.concat(second);
console.log(combine);
console.log(combine.slice(2, 4));

let cars = ["Mercedes-Benz", "BMW", "Audi", "Honda", "Tata", "Mahindra"];
console.log(cars);
let sliced = cars.slice(2, 5);
console.log(sliced);
*/

// Spread Operator:
// let first = [1, 3, 5];
// let second = [2, 4, 6];

// let combined = [...first, ...second];
// let combined = [...first, "a", ...second, "b"];
// console.log(combined);

//Copy create using Spread Operator:
// let another = [...combined];
// console.log(another);

//Iterating an Array:
// let N = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for of loop:
// for (const i of N) {
//   console.log(i);
// }

//forEach loop:
// N.forEach(function (number) {
//   console.log(number);
// });

//Arrow Function:
// N.forEach((number) => console.log(number));

//joining Array:
/*
let N = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var joined = N.join(",");
console.log(joined);

let msg = "My name is ansh rathod";
let parts = msg.split(" ");

console.log(parts);
console.log(parts.join("_"));
*/

//Sorting:
/*
let number = [5, 10, 4, 40, 3, 7, 9];
let sorted = number.sort((a, b) => a - b);
for (const i of number) {
  console.log(i);
}
console.log(sorted);
*/
// number.reverse();
// console.log(number);

//Filter Arrays:
/*
let num = [3, 4, -6, -2, 1];

let filtered = num.filter(function (value) {
  return value >= 0;
});
console.log(filtered);
*/
//map function:
/*
console.log("Mapping");
let value = [4, 5, 6, 7];
let items = value.map(function (val) {
  return "student_no " + val;
});
console.log(items);
*/
let number = [2, 3, -6, -5];
let filtered = number.filter((value) => value >= 0);
/*
let items = filtered.map((val) => {
  return { value: val };
});
*/

//Chainning:
let items = number
  .filter((value) => value >= 0)
  .map((num) => {
    return { value: num };
  });
console.log(items);

//Reducing Array:
let arr = [1, 2, 3, 4];
let total = 0;
for (let value of arr) {
  total = total + value;
}
console.log(total);

let totalSum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalSum);
