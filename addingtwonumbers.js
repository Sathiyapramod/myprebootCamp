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

const c = Number(userInput[0])+Number(userInput[1]);
console.log(c);

//end-here
});