var country="India"
myCountry="India"
document.write("var country=India<br>myCountry= India<br>")
document.write("window.country: "+window.country+"<br>")
document.write("window.myCountry:"+window.myCountry+"<br>")
document.write("country" in window)
document.write("myCountry" in window)
document.write("<br><br>Variable Without declaration also belongs to global context<br>")
function showVariable(){
    bond="007"
    document.write("Bond inside the function: "+bond+"<br></br>")
}
showVariable()
document.write("Bond outside the function: "+bond)