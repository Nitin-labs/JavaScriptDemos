function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  document.write(add5(2))
  console.log(add10(2)); // 12
  document.write(add10(2))
