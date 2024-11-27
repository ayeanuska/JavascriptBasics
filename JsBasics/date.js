// date manupulation

// getComputedStyle, set, format

// const today = Date(); //GOVE STRING
// const today = new Date(); // GIVE  OBJ
// console.log(today);

// date is obj
// Date()- constructor

// const today = Date.now()

//if you want to get specific time / daay/ date
// const today = new Date();

// const data = today.getDate()
// const data = today.getDay()
// const data = today.getFullYear()

const today = new Date("2020-8-12");
const data = today.getDay();
console.log(data); // will give which day was it on that date

const date = today.toLocaleDateString(); //27/11/2024
const date = today.toLocaleTimeString; // 00:00:00
const date = today.toISOString;
