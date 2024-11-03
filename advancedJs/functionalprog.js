// FUNCTIONAL PROGRAMMING:
// An approach to software development that uses pure functions to create maintainable software

// create call invoke = initializATION ASSIGNING INVOKING

// concepts:

// 1. side effect

// 2. PURE FUNCTION
const add = (a, b) => {
  return a + b;
};

// or

const add2 = (a, b) => a + b;

// - less bugg code
// - v small and scalable

// 3. HIGH ORDER FUNCTION
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
const adAndSquare = (a, b) => {
  const ttl = a + b;
  const power = (multiplier) => ttl ** multiplier;
  return power;

  const val = addAndSquare;
  2, 3;
  console.log(val());
};

// RECURSION

// HOMEWORK
