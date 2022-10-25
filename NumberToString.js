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

var a = userInput[0];
var str = a.toString();
var b =" ";

for(var i=0;i<str.length;i++){
    b += str.charAt(i) + " ";
}
console.log(b.trim());

});
