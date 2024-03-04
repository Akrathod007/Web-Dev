// let e = document.addEventListener("click", function () {
//   alert("I clicked on document");
// });

// let content = document.querySelector("h1");
// content.addEventListener("click", function () {
//   content.style.background = "yellow";
// });

// let hello = document.querySelectorAll("h2");
// console.log(hello);
// for (let i = 0; i < hello.length; i++) {
//   document.addEventListener("click", function () {
//     hello[i].style.background = "yellow";
//     hello[i].style.color = "red";
//   });
// }

// function print() {
//   console.log("Namaste India....");
// }
// document.addEventListener("click", print);
// document.removeEventListener("click", print);

// const content = document.querySelector("#wrapper");
// content.addEventListener("click", function (event) {
//   console.log(event);
// });

// let link = document.querySelectorAll("a");
// link[1].addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Helooooooo..");
// });

/*
let myDiv = document.createElement("div");
function para(event) {
  //   console.log("i have clicked an para");
  console.log("para" + event.target.textContent);
}
myDiv.addEventListener("click", para);
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is paragraph" + i;

  //   newElement.addEventListener("click", function (event) {
  //     console.log("i have clicked an para");
  //   });

  //   newElement.addEventListener("click", para);
  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
*/

//Niche wala code batata hai ki kispe event listen karni hai or kispe nahi.
let element = document.querySelector("#wrapper");
element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("span par click kia hai" + event.target.textContent);
  }
});
