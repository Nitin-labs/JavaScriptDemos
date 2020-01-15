//  Program to use of this keyword
var pen={
    company: "Reynolds",
    ink: "Blue",
    writePen:function(){
        document.write(this.company+" has "+this.ink+" color ink<br> ")
        document.write(pen.company+" "+pen.ink)
        //document.write(this)
    }
}
pen.writePen()