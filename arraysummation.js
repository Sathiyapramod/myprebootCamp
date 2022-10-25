const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", () => {
    //start-here
    console.log(userInput);

    var something =userInput[0].split(" ");
    var something1 =userInput[1].split(" ");
    var something2=userInput[2].split(" ");
    console.log(something);
    console.log(something1);
    console.log(something2);
    var dd = parseInt(something[0])+parseInt(something[1])+parseInt(something[2]);
    console.log(dd);
    //end-here
});