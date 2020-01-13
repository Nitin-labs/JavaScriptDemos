function Fruit(){

}
Fruit.prototype.color="Yellow"
Fruit.prototype.sweetness=7
Fruit.prototype.fruitName="Generic Fruit"
Fruit.prototype.nativeToLand="USA"
Fruit.prototype.showName=function(){
    console.log("This is a "+this.fruitName)
    document.write("This is a "+this.fruitName+"<br>")
}
Fruit.prototype.nativeTo=function(){
    console.log("Grown in "+this.nativeToLand)
    document.write("Grown in: "+this.nativeToLand+"<br>")
}
Fruit.prototype.fruitColor=function(){
    document.write("Fruit Color: "+this.color)
}
var mangoFruit = new Fruit ();
mangoFruit.showName(); //
mangoFruit.nativeTo();
mangoFruit.fruitColor()
