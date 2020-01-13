//Program to display multiple objects using Constructor Pattern

function Fruit(theColor, theSweetness, theFruitName,theNativeToLand){
    this.color=theColor;
    this.sweetness=theSweetness
    this.fruitName=theFruitName
    this.nativeToLand=theNativeToLand

    this.showName=function(){
        console.log("This is a "+this.fruitName)
        document.write("This is a "+this.fruitName+"<br>")
    }

    this.ShowColor=function(){

    }

    this.nativeTo=function(){
        this.nativeToLand.forEach(function(Country){
            console.log("Grown in: "+Country)
            document.write("Grown in: "+Country+"<br>")
            
        });
    }
}
var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName();
var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); // This is a Mango.
mangoFruit.nativeTo();