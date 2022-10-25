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

if(something[0]>something[1]){
    console.log(something[0]);
}
else{
    console.log(something[1]);
}



//end-here
});