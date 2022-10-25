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
var x =userInput[0];
var sum=0;
while(x>0){
    sum += x % 10;
    x = Math.floor(x/10);
}
console.log(sum);

    
});
