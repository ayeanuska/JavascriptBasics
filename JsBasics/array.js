// Array//

const fruits = ["apple", "banana", "papaya", "orange"];

//  const val = fruits.length;
//  const val = fruits[2];

///////  push for add /////////////

// const val = fruits.push("watermelon"); // adds at end
// const val = fruits.unshift("strawberry"); // adds at first
// const val = fruits.splice(2, 0, "strawberry "); // adds at given index
// (2,0 ) 2 is where to add 0 is to delete.

//////pop for delete
// const val = fruits.pop();// deletes last item
// const val = fruits.shift(); // deletes first item
// const val = fruits.splice(2, 2); // deletes from index given item (inbetween)
// here deletes two item from 2.

// console.log(val);

// console.log(fruits);

// // update memory// not a goood practice
// fruits[2]: "blueberry"

// const val = fruits.slice(2, 3);
// read the data from 2 to 3 but not include 3

// converting array to string
// const val = fruits.toString();
// const val = fruits.toString().split(","); // converting from array too string and again back to string

//string to array , array to sting.
// const val = str.split(" ").join();

//  .join("seperator")-- can be -, _, ..

// const val = fruits.includes("mango"); // gives index
// const val = fruits.indexOf("mango"); // gives true /f

// const val = fruits.sort(); // sorts the array
// if numeric value : sorts acc to first numvber
// for eg [ 30,55,9] sorted acc to first num

console.log(fruits.reverse());
