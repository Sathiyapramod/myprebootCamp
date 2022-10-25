// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  var a = userInput[0];
  console.log(a);
  var str = a.tostring();
   console.log(a);
  console.log(str);
  for(var i=0;i<=str.length;i++){
      console.log(str.charAt[i]);
  }

  //end-here
});