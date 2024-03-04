// console.log(document.getElementById("h1"));
// console.log(document.getElementsByClassName("heading"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.querySelector("#h1"));
// console.log(document.querySelector(".heading"));
// console.log(document.querySelectorAll(".heading"));

// let para = document.querySelector(".para");
// console.log(para);
// para.innerHTML = "Namaste";
// console.log(para.innerHTML);
// console.log(para.textContent);
// console.log(para.innerText);

let content = document.querySelector(".paraClass");
let newPara = document.createElement("p");
// 1st method
// let text = document.createTextNode("I am Ansh Rathod");
// newPara.appendChild(text);
// content.appendChild(newPara);

//2 method
// newPara.textContent = "I am Ansh rathod";
// console.log(newPara);
// console.log(content);
newPara.textContent = "India";
content.insertAdjacentElement("afterbegin", newPara);
// console.log(content);
// console.log(newPara);

//Remove Child
// let childElement = document.querySelector(".bold");
// console.log(childElement);
// content.removeChild(childElement);
// console.log(childElement.parentElement.removeChild(childElement));
// console.log(content);

//Add css to element:
// console.log(newPara);
//1 method:
// newPara.style.color = "red";
// newPara.style.background = "black";

//2 method:
// newPara.style.cssText = "color:green; background-color:yellow; font-size:2rem";

//3 Method:

// newPara.setAttribute("style", "color:blue;background-color:pink");
// newPara.setAttribute("id", "india");

//4 Method:
// console.log(content);
// let classes = content.className.split(" ");
// console.log(classes);

//5 Method:
// let classes = content.classList;
// classes.add("abc");
// classes.add("pqr");
// classes.add("xyz");
// console.log(classes);
// classes.remove("xyz");
// console.log(classes);
// classes.toggle("pqr");
// console.log(classes);
// console.log(classes.contains("abc"));

let para = document.querySelector(".para");
console.log(para.outerHTML);
console.log(para.innerHTML);
