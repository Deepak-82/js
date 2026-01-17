const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1054.55662
// console.log(otherNumber.toPrecision(5));

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++Math++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(6.9));
// console.log(Math.min(4,3,6,8,9));
// console.log(Math.max(3,5,8,9));

console.log(Math.random()); // return value etween 0 & 1
console.log(Math.random()*10 + 1); // return min 1
console.log(Math.floor(Math.random()*10)); //return 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1)) + min);
