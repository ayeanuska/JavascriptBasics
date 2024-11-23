//CHAALLENGE array.

// 1. create an array of 50 random number range betn 1 to 100

const arr = [];

for (let i = 0; i < 50; i++) {
  const num = Math.floor(Math.random() * 100) + 1; // 1--100
  arr.push(num);
}

//   arr[i]= num;

// 2. sort the array in descending order

// arr.sort();  // default sort only

arr.sort((a, b) => b - a);
console.log(arr);

// 3.get total of the array
const total = arr.reduce((acc, num) => acc + num, 0);
console.log(total);

// 4.divide the original of the array in 2 new arrays that contains even or odd numvers only each
const evenArr = arr.filter((item) => item % 2 === 0);
const oddArr = arr.filter((item) => item % 2 !== 0);
console.log(evenArr, oddArr);

// 5. remove duplicate number for the original array
// const uniqueAr = [...new Set(arr)];

const uniqueAr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueAr.includes(arr[i])) {
    uniqueAr.push(arr[i]);
  }
  console.log(arr[i]);
}
console.log(uniqueAr);

// Challenge #2 create unique array 50
// numbers range between 1 and 100 programmatically

const uniqueArr = [];
for (i = 0; uniqueArr.length <= 50; i++) {
  const arr2 = Math.floor(Math.random() * 100 + 1);
  if (!uniqueArr.includes(arr2));
  {
    uniqueArr.push(arr2);
  }
}
console.log(uniqueArr);
