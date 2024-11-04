///////manipulation///////

// 1.number manipulation
//  safe num range:  -2 TO THE POWER 53 -1 to  2 to the power 53- 1

// const num = 234_456_333_030;
// console.log(num);

const num = "6336";
console.log(typeof num, num); // string 6336

// downcasting .

const num1 = "034840";
// const val = +num1; ///// convert string to number using (+number )

const num2 = "45af4 ";
const val = parseInt(num2); // 45 // ignores if any character detected.

// similarly for decimal value use parseFloat

// to check is is not a number

isNaN(val);

console.log(typeof val, val, isNaN(val)); // false - cause it is a number
