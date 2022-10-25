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
var d = userInput[0]*1000;
var d1 = userInput[0]*100000;
console.log(d);
console.log(d1);
//end-here
});
