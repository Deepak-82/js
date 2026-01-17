const name ="deepak"
const repocount = 50

// console.log(name + repocount+ ' value');

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('deepak-dp-pal')

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename)
console.log(gamename.charAt(2));
console.log(gamename.indexOf('e'));

const newString =gamename.substring(0,4)
console.log(newString);
// substring dont allow negative key

const anotherString = gamename.slice(-5,4)
console.log(anotherString);
// slice allow negative key

const newStringOne = '       Deepak           '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://deep.com/deepak%pal"

console.log(url.replace('%','_'))
console.log(url.includes('deepak'));

console.log(gamename.split('-'));







