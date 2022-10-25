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
var number  = userInput[0];
var something = Math.round(number);
if(something%2 == 0){
    console.log("Even");
}
else if (something == 0){
    console.log("Zero");
}
else {
    console.log("Odd");
}
//end-here
});