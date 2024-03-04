//Function decleration
function run() {
  console.log("Running");
}
//Function call or invoke
run();

//Named Function assignment:
let no = function number() {
  console.log(5);
};
no();

//Anonymous function assignment:

let jump = function () {
  console.log("Jumpping");
};

jump();

function sum() {
  let total = 0;
  for (let value of arguments) {
    total = total + value;
  }
  return total;
}

let s = sum(1, 2, 3, 4, 5);
console.log(s);

//Rest Operator:

function mul(...args) {
  console.log(args);
  let multiple = 1;
  for (let i of args) {
    multiple = multiple * i;
  }
  return multiple;
}
let m = mul(1, 2, 3, 4, 5);
console.log(m);

//Default parameter:
function interest(p, q, r = 10) {
  return ((p * r) / 100) * q;
}
console.log(interest(1000, 10));

//Getter Setter:

let person = {
  fName: "Ansh",
  lName: "rathod",
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },

  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("You have not sent a string");
    }
    let parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

person.fullName = "Raj Jadav";
console.log(person.fullName);
// console.log(person.fullName);
// function fullName() {
//   return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());

//Try and Catch:

try {
  person.fullName = undefined;
} catch (e) {
  alert(e);
}
console.log(person.fullName);
