function celebrityIdCreator(theCelebrities){
    var i
    var uniqueId=100
    for (i = 0; i <theCelebrities.length; i++) {
        theCelebrities[i]["id"]=function(){
            return uniqueId+i

        }         
    }
    return theCelebrities
}
var actionCelebs=[{name:"stallone",id:0},{name:"Cruise", id:0}, {name:"Willis", id:0}]
var createIdForActionCelebs=celebrityIdCreator(actionCelebs)
var stalloneId=createIdForActionCelebs[0]
document.write(stalloneId.id())