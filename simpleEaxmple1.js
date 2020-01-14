function makeFunc() {
    var name = 'Mozilla';
    function displayName(owner) {
      //alert(name);
      return name +owner
    }
    return displayName;
  }
var myFunc = makeFunc();
 //myFunc();
 document.write(myFunc(" Nitin"))