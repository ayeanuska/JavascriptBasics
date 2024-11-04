// FUNCTIONAL PROGRAMMING:
// An approach to software development that uses pure functions to create maintainable software

// create call invoke = initializATION ASSIGNING INVOKING

// concepts:

// 1. side effect

// 2. PURE FUNCTION
/* const add = (a, b) => {
  return a + b;
};

// or

const add2 = (a,  b) => a + b;
*/

// - less bugg code
// - v small and scalable

// 3. HIGH ORDER FUNCTION

// takes one or more fuction as argument or returns a function as a result

/*  const val = add(2, 4) + add(2, 4) + add(4, 4);
console.log(val); */

/* const add1 = (a, b) => a + b;
const sub = (a, b) => a - b;
const calculator = (a, b, func) => {
  console.log(a, b, func);
  func(a, b);
};

const val = calculator(3, 2, add);
console.log(val); */

// add two item and finf to the power ..
// const adAndSquare = (a, b) => {
//   const ttl = a + b;
//   const power = (multiplier) => ttl ** multiplier;
//   return power;

// };
//   const val = addAndSquare(2, 3);   // a,b = 2,3
//  /* or
//   const val =addAndSquare (2,3) (2);*/

//   console.log(val(2));  // to the power 2

// RECURSION
// - a techniqque where a function calls it self

// - must have base case to stop recursion and a recursive case

// const factorial = (n) => {
//   if (n < 1) return 1;
//   return n * factorial(n - 1);
// };

// console.log(factorial(5));

const money = [234, 45, 456, 23];
const total = (moneyArg) => {
  //base case to end the loop
  if (!moneyArg.length) {
    return 0;
  }
  // call the function itself
  return moneyArg.pop() + total(money);
};

// HOMEWORK
// WHAT IS MEMOIZATION ?
// WHAT IS CURRYING ?
