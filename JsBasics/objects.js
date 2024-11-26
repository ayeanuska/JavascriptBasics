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

// console.log(person);

// accesing data

// const data = person.data, //by .
// const data =person["parents"],// by index
// const data = person.skills[3], //BY . AND INDEX FOR NESTED ONES SO GOT JS
// const data = person.skills[4][2],//double nested- double index- got flexbox
// const data = person.parents.f;

// console.log(data);

// //updating data

// person.name = "ayeanuska";

// console.log(person);

//adding data in obj is the same as updating
// order doesnt matter in obj while matters for array

// (person.address = "pacific highway hornsby"),
//   (person.parents.bro = "anjish"),
//   person.skills[3].push("UI/Ux ");
// console.log(person);

// to delete data
// (person.pets = null), // delete the data but still hold memory
  ///can use undefined

  // delete person.phone // not best way but dleetes both properties and data

  // delete for array
//   person.skills[2].pop();

// delete person.parents.f


//destructuring  es6 obj

const { name, phone,age , parents} = person; 
console.log(name, age parents:{f}); //anuska and undefined 