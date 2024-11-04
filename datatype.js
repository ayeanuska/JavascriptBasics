///////data type & data manipulation ////
/* primitive data type 
Number 
String
Boolean
null
undefined  */

////////Data manipulation///////

// 1.number manipulation
//  safe num range:  -2 TO THE POWER 53 -1 to  2 to the power 53- 1

// const num = 234_456_333_030;
// console.log(num);
// 1. Number manipulation
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

// 2. string manipultion

// const str = ""; // '' or ``

// // concat = +
// eg : "4" + "4" = 44
// "shyam" + "Roy" = Shyam Roy

const str = `hi my name is " Anuska Shrestha". I am a student.`;
console.log(str);

// (\) -- escape character ignores the next charac.
// (str.length) --- calculate the number of str

// const val = str.length;
// const val = str.toLowerCase;
// const val = str.toUpperCase;
// const val = str.charAt(0); // h
// const val = str[0]; // h
// const val = str.indexOf(20) //e

const value = str.replace("Anuska", "A");
// replaceAll - replaces all Anuska present.
console.log(value);
