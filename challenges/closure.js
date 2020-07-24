// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:
/* its defined inside the scope of myFunction (where 'internal' also is), so when 'nestedFUnction' looks for the variable internal, after checking it's own scope, it goes to the next level up, which is inside the myFunction.
*/
/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  if (num <= 0) return 0;
  let result = num;
  while(num--) {
    result += num;
  }
  return result;
}

console.log('test of summation, should be 10: ' + summation(4));
