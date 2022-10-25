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

for(var i=1;i<=something;i++){
    number = 9*i;
 console.log(number);
}


//end-here
});