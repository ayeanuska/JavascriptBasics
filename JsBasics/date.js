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

// const today = new Date("2020-8-12");
// const data = today.getDay();
// console.log(data); // will give which day was it on that date

// today.setDate(today.getDate() + 10); // addding 10 days to todays date
// const today = new Date("2022-11-12");

// console.log(today.getTime()); to get time stamp
// console.log(today);

// challenge date

const milliSecPerDay = 24 * 60 * 60 * 1000;

const checkExp = ({ name, exp }) => {
  console.log(name, exp);
};

const today = Date.now();
const expTs = new Date(exp).getTime();

const diffDay = Math.floor(expTs - today) / milliSecPerDay;

console.log(diffDay);

if (diffDay < 1) {
  return `${name} is expired ${MAth.abs(diffDay)} ago`;
} else {
  return `you have ${diffDay} to use this ${name}`;
}

const foods = [
  {
    name: "Pizza",
    exp: "2024-12-02",
  },
  {
    name: "Salmon",
    exp: "2023-02-02",
  },

  {
    name: "Rice",
    exp: "2025-12-04",
  },
];

foods.map((food) => {
  const result = checkExp(food);
  console.log(result);
});
