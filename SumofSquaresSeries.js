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

var square = something*something;


if(something == 0){
    console.log("0");
}
else if(something < 0){
    console.log("Error")
}
else
{
    console.log(square);
}

//end-here
});