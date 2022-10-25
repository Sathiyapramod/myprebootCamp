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
var something  = userInput[0].split(" ");
var a = something[0];
var b = something[1];
var c = something[2];
var r1,r2;
var discriminant = ((Math.pow(b,2))-(4*a*c));
r1 = (-b+Math.sqrt(discriminant))/(2*a);
r2 = (-b-Math.sqrt(discriminant))/(2*a);

var root1 = r1.toFixed(2);
var root2 = r2.toFixed(2);
console.log(root1);
console.log(root2);
//end-here
});