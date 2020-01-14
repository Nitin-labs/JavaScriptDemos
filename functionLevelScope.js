// Program for Local variable

var location="India"            // Global variable
function showName(){
    var location="Maharashtra"   // Local Variable
    document.write("In function"+location)
}
document.write(location)