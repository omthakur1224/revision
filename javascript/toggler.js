// example code
function toggler(a, b, c) {
    let count = 0;
    return function () {
      count++;
      //printing the values according to condition they called.
      if (count % 3 == 1) console.log(a);
      else if (count % 3 == 2) {
        console.log(b);
      } else {
        console.log(c);
      }
    };
  }
  // toggler function is returning a function that can be stored in toggle variable.
  // which means toggle is also a function.
  
  const toggle = toggler(1, 2, 3);
  
  toggle();
  // 1
  toggle();
  // 2
  toggle();
  // 3
  toggle();
  // 1
  toggle();
  // 2
  toggle();
  // 3
  