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
for(i=1;i<=something[1];i++){
    console.log(something[0]);
}

//end-here
});