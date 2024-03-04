//Performance:1)mesure speed of code
//2)how to write efficient & performing code
//3)event loop
console.log("Performance:");

// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;

//   document.body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log("This took " + (t2 - t1) + " ms");

//Optimising a code:

// const t3 = performance.now();
// let myDiv = document.createElement("div");

// for (let i = 1; i <= 100; i++) {
//   let element = document.createElement("p");
//   element.textContent = "This is para " + i;

//   myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("This took " + (t4 - t3) + " ms");

// let fragment = document.createDocumentFragment();
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;

//   fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); //one time create reFlow , rePrint

//JS is single threading language.
//Single threading is processing of one  command at a time
/*
function addPara() {
  let para = document.createElement("p");
  para.textContent = "Js is single";
  document.body.appendChild(para);
  console.log(para);
}

function appendNewMessage() {
  let para = document.createElement("p");
  para.textContent = "kya haal chaal";
  document.body.appendChild(para);
  console.log(para);
}

addPara();
appendNewMessage();
*/

//setTimeOut() async function: Whenever you are trying to defer something until the stack is clean.

setTimeout(function () {
  console.log("hello Everyone");
}, 1000);
