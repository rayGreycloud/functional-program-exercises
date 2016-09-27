// Functional Programming - Kyle Simpson
// Pure functions - Exercise 1
// My solution

function bar(x) {
  var y = 5, z;

  foo(x);
  return z;

  function foo(x) {
  y++;
  z = x * y;
  }

bar(20,5);  // 120

bar(25,5);  // 150
