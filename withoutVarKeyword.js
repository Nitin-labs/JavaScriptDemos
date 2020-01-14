// If you don't declare your local variables with the var keyword, they are part of the global scope
// Search starts from inside the function ie. local variables have more Priority than global one 
var minister="Narendra Modi"
function showMinister(){
    document.write("<br>Show Minister :"+minister)
}
function showLocalMinister(){
    minister="Uddhav Thakare"
    document.write("<br>Show Local Minister :"+minister+"<br>")
}

showMinister()
document.write("<br><br>-**Without var Keyword**-")
showLocalMinister()
showMinister()

function showLocalMinister(){
    var minister="Uddhav Thakare"    
    document.write("<br>Show Local Minister :"+minister+"<br>")
}

showLocalMinister()
document.write("<br><br>-**With var Keyword**-")
showMinister()
