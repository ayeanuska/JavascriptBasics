// create variables to store all the types of  Data types.

//  primitive Data Types:

// string
const fName = " Anuska";
let lName = "Shrestha";

console.log(fName + " " + lName);
console.log(typeof fName);

// number
let num1 = 10;
let num2 = 5;

console.log(num1 + " " + num2 + " are your numbers");

console.log(typeof num1);

// bigInt

let bigNum = 123456732123456721n;
console.log(bigNum);

console.log(typeof bigNum);

//Boolean

isMale = true;
isMarried = false;

console.log("She is a feale: " + isFemale);
console.log("She is Married: " + isMarried);

console.log(typeof isFemale);

// null
let qtyOfApples = null;

console.log(typeof qtyOfApples);

// symbol

let id = Symbol("123");

// Undefined:

let children;

console.log(children);

console.log(typeof children);

// Refrence ( non  primitive)

// Array

let vehicle = ["car", "bike", "train", "plane"];

// Object

let carObj = {
  brand: "maruti",
  mfd: 2012,
};

// Function

const helloFunction = function () {
  console.log("Hello, there");
};
helloFunction();
