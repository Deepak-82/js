// Array

const myArr = [0,1,2,3,4,5,6]
const myHeroes = ['shiv','ram','mohan']

const myArr2 = [1,2,3,4]
// console.log(myArr[1]);

// Array Methods 

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

myArr.unshift(9) // insert in first in array
myArr.shift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join()

// console.log(typeof(myArr));
// console.log(typeof(newArr));


// slice, splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)//slice exclude range and dont any change in original array
console.log("B ", myArr);
console.log(myn1);


const myn2 = myArr.splice(1,3)//splice manipulate original array & include range
console.log("C ", myArr);
console.log(myn2);

