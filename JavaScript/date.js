let date = new Date();
console.log(date);

let date2 = new Date("January 2 2004 4:00");
console.log(date2);

let date3 = new Date(2004, 0, 2, 4);
console.log(date3);
date3.setFullYear(2000);
console.log(date3);
console.log(date3.getFullYear());
