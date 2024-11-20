// for , while , do while are commonly used loops by most of the programming languages.

// 1. for loop and 2. hile loop always chwcks the condition before any execution
//do while runs the code once and then checks for conditiins

// breakout loop
// continue- help exit and skip one Time
// break- stop /break or switch lopp.breakout

// for (let i = 0; i <= 100; i++) {
//   //     if (i==10)
//   //         break;
//   //     continue;

//   // }
//   // console.log(i);

//   // to find even Num.
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
//   // skips odd number
// }

//Js specific array loops

// for / of for (x of cars )  for array
const fruits = ["apple", "banana", "orange", " mango"];
console.log(fruits);

const upperFruits = [];

for (let item of fruits) {
  // upperFruits.push(item.toUpperCase());
  upperFruits.push(item.toUpperCase() + "-sku");
}
console.log(upperFruits);

// to concat in one go
