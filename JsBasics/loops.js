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

// // for / of for (x of cars )  for array
// const fruits = ["apple", "banana", "orange", " mango"];
// console.log(fruits);

// const upperFruits = [];

// 1. for (let item of fruits) {
//   // upperFruits.push(item.toUpperCase());
//   upperFruits.push(item.toUpperCase() + "-sku");
// }
// console.log(upperFruits);

// // to concat in one go

// for (i = 0; i > fruits.length; i++) {
//   console.log(i, fruits(i));
// }
/////////////// 2. foreach loop//////////--
// allow you to loop through each item and give each item and index.

// const fruits = ["apple", "banana", "orange", " mango"];j
// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

// // - used if there is no need to add data but only loop throught the arry

// //3. map---- allow you to create a sub array withput mutating the original array
// // creates a memory location for new array and waits for items to get passed init ?
//new array is of sam esize of original array( always occu[y memory block])

// const newData = fruits.map((item, i) => {
//   // console.log(item, i);
//   // return "sku-" + item.toUpperCase();

//   // console.log(newData);
//   // result:[ 'sku-APPLE', 'sku-BANANA', 'sku-ORANGE', 'sku- MANGO' ]

//   if (item.includes("n")) {
//     return item;
//   }
// });

// 4. filter
// // new array size depends on weather we want to send the item creating req memory block
// const newData = fruits.filter((item, i) => {
//   console.log(item, i);
//   if (item.includes("n")) {
//     return true;
//   }
// });
// console.log(newData);
// // [ 'banana', 'orange', ' mango' ]- result

// *  const newData = fruits.filter((item, i) => item.includes("n")):

// reduce
const money = [10, 345, 4395, 5443, 644, 6433];
const total = money.reduce((subTtl, item) => {
  return subTtl + item;
}, 0);
console.log(total);
// 0 is the initial value //
//subttl is acting as accumulator.

// 4. every

const result = fruits.every((item) => {
  console.log(item);
  return item.includes("a");
  // return; // test condition
});

console.log(result);

//true if evry single array pass the condition gives true other wise false

const resultB = money.every((num) => {
  return num >= 10;
});
