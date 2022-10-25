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
var s = something.toString();
for(i=0;i<=s.length-1;i++)
{
  console.log(s[i])
}
//end-here
});

var something = userInput[0];
var s = something.toString();
var final="";
for(i=0;i<=s.length-1;i++)
{
    if(i<s.length-1){
  final = final + s[i]+",";}
  else{
      final = final+s[i];}}
  console.log(final);