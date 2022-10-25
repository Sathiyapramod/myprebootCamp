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
var a = userInput[0];
var b = userInput[1];
var c = userInput[2];

console.log(Math.max(a,b,c));
});