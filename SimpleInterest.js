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
var something = userInput[0].split(" ");

var dd = something[0] *something[1]*something[2]/100;
var num = parseFloat(dd).toFixed(2);
console.log(num) ;


//end-here
});