var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();
  document.write(counter.value())
  console.log(counter.value()); // logs 0
  counter.increment();
  counter.increment();

  document.write(counter.value())
  console.log(counter.value()); // logs 2

  counter.decrement();

  document.write(counter.value())
  console.log(counter.value()); // logs 1