function variableBeforeDeclaration(){
document.write("First Name: "+name)  // displays "undefined"
var name="Zack"
document.write("<br>Last Name: "+name)
}
variableBeforeDeclaration()

document.write("<br><br>**Function Declaration Overrides Variable Declaration if variable is not initialised** <br>")
var test;
function test(){
    document.write("Rich")
}
document.write(typeof test)