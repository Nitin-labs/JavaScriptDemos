//var university={Name:"BAMU",  Accrediated:true, Location:"Aurangabad"}
for(var element in university){
    document.write("University "+element+"<br>")
}
var Dept=function(){
    this.deptName="Philosophy"
}
var university=new Dept()
university.name="BAMU"
university.accredited="true"
university.location="Aurangabad"

for(var detail in university ) {
    document.write(" "+detail+" ")
}