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
    f: "amrit",
    m: "karuna",
  },

  bio: () => {
    return "I love creating art";
  },
};

console.log(person);

// accesing data




const data = person.data, //by .
const data =person["parents"],// by index
const data = person.skills[3], //BY . AND INDEX FOR NESTED ONES SO GOT JS
const data = person.skills[4][2],//double nested- double index- got flexbox
const data = person.parents.f;

console.log(data);
