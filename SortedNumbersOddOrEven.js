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
const str = Array.from(String(a),Number).sort().join('');
var odd = "", even = "";
for(var i=0;i<str.length;i++){
    if(str.charAt(i)%2 === 0){
        even += str.charAt(i) + " ";
    }
    else {
        odd += str.charAt(i) + " ";
    }
}
console.log(even.trim());
console.log(odd.trim());
});