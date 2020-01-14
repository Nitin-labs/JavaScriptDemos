function productName (localVendor) {
    var nameIntro = "This is the Joint Venture of <br>";
    // this inner function has access to the outer function's variables, including the parameter
   function foreignVendor (theforeignVendor) {
        return nameIntro + localVendor + " and " + theforeignVendor;
    }
    return foreignVendor;
}

var collaboration = productName ("Hero"); // At this juncture, the productName outer function has returned. 
//ie. it creates a reference of foreignVendor function and stores in collaboration

document.write(collaboration ("Honda")); // This product is Michael Jackson 
