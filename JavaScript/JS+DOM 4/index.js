//Asyncrouns function

// setTimeout(function () {
//   console.log("third");
// }, 3000);
// function sync() {
//   console.log("first");
// }
// sync();

// console.log("second");

//Promise : jab app koi chezze parellel execute karvana chate ho background main in javascript
//Definition of Promise: The Promise object represents the eventual completion or failure of an asychronous operation
// and its resulting value.

/*
    A Promise is in one of these states:
    1)pending 2)fullfilled 3)rejected
*/
/*
let meraPromise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("i am inside promise1");
  }, 5000);
  //   resolve(1998);
  reject(new Error("Error hai"));
});

meraPromise1.then((value) => {
  console.log(value);
});

meraPromise1.catch((error) => {
  console.log("Error");
});
*/

// let meraPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("i am inside promise2");
//   }, 3000);
//   //   resolve(1998);
//   // reject(new Error("Error hai"));
// });
// console.log("pehla");

/*
let pehla = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Set timeout1 started");
  }, 2000);

  resolve(true);
  //   reject(true);
});

pehla
  .then(() => {
    let second = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("Set timeout2 started");
      }, 3000);
      resolve("second 2 resolved");
    });
    return second;
  })
  .then((value) => console.log(value));
*/

//Convert normal function to asnchronous function using async keyword:
// async function xyz() {
//   return 10;
// }
// console.log(xyz());

/*
async function utility() {
  let ahmMausam = new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("ahmedabad is so hooooooot.");
    }, 3000);
  });

  let suratMausam = new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("surat is so coooooool.");
    }, 5000);
  });

  let aM = ahmMausam;
  let sM = await suratMausam;

  return [aM, sM];
}
console.log(utility());
*/

//Fetch API

// async function utility() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let output = await content.json();
//   console.log(output);
// }
// utility();

// async function helper() {
//   let options = {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };

//   let content = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     options
//   );
//   let response = content.json();
//   return response;
// }

// async function utility() {
//   let ans = await helper();
//   console.log(ans);
// }

// utility();

//closure:
function outer() {
  let name = "Ansh";

  function inner() {
    console.log(name);
  }

  return inner();
}

let ans = outer();
