const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
//start-here
var something = userInput[0];
let a = something[0];
let b = something[0]*2;
let c = something[0]*3;
console.log(a , b , c);

//end-here
});