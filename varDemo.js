/* Variable initialised first and then declared, does not affect the program, also called var hoisting
  Program to use var keyword, does not recommended instead use let keyword
  It also allows redeclaration of variable*/
myName='Nitin';
var myName='JAVASCRIPT'
function logName(){
    console.log(myName); // only shows in console tab
    document.write(myName);
   }
logName();
var myName;
console.log("End of Program");