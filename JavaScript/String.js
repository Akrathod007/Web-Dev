let lastName = "Rathod";
let religion = "    Hindu";
let firstName = new String("Ansh");

console.log(typeof lastName);
console.log(typeof firstName);

console.log(lastName.length);
console.log(lastName[3]);
console.log(lastName.charAt(4));
console.log(lastName.endsWith("od"));
console.log(lastName.indexOf("t"));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(religion.trim());
console.log(lastName.replace("th", "do"));

let msg = 'My name \nis\n \' "Ansh" Rathod';
// let words = msg.split(" ");
// console.log(words);
console.log(msg);

//Template literl:
let msg2 = `This is 
my first 
    message
by ${firstName}`;
console.log(msg2);
