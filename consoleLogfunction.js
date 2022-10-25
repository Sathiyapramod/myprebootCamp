var d = userInput[0];
console.log(d);
//case one
let a = userInput[0]*1;
let b = userInput[0]*2;
let c = userInput[0]*3;
console.log(a,b,c); 
// case two - output in the same line
let d = a+" "+b+" "+c+" ";
console.log(d);
// case three - output in the same line using temp variable
let a = [11,22,33];
let final="";
for(i=0;i<a.length-1;i++){
    if(i<a.length-1){
        final = final +a[i]+" ";}
        else {
            final = final +a[i];
        }
}
console.log(final);
// case four - printing an array using loops;
console.log(a.join(" "));
// case five - join function