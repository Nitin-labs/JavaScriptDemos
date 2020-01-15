//Program for call function
// Each method in Javascript has a call method
let name={
    firstname: "Babu",
    lastname: "Gavali",
}
let showFullName= function(hometown,state){
    document.write(this.firstname+" "+this.lastname+" belongs to "+hometown+" situated in "+state+"<br>")
}
document.write("<br>Using call function<br>")
showFullName.call(name,"Beed","Maharashtra") //also called function borrowing
//here the first parameter is reference to the this parameter ie. name
let name2={
    firstname:"Sachin",
    lastname:"Shastri"
}
showFullName.call(name2,"Bhopal","Madhya Pradesh") // Provides code reusability

document.write("<br>Using Apply function<br>")
showFullName.apply(name2,["Bhopal","Madhya Pradesh"]) // works same as of call function the only diffrence is
// first parameter refers to this variable and second is always a array(enclosed in square brackets[]) having 
//remaining parameters specified in it
