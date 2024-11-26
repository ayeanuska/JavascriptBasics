// js Data manipulation

// obj:
const person = {
  name: "anuska",
  phone: 22022930,
  ismarried: true,
  gender: undefined,
  pets: null,
  skills: [
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    ["DOM", "GRID SYSTEM", "FLEXBOX"],
    "REACT",
  ],

  parents: {
    f: amrit,
    m: karuna,
  },

  bio: () => {
    return "I love creating art";
  },
};

console.log(person);

// accesing data

// console.log(person.name); //by .
// console.log(person["parents"]);// by index
// console.log(person.skills[3]) // BY . AND INDEX FOR NESTED ONES SO GOT JS

console.log(person.skills[4][2]); // double nested- double index- got flexbox
console.log(person.parents.f);
