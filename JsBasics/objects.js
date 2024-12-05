// js Data manipulation

// obj:
// const person = {
//   name: "anuska",
//   phone: 22022930,
//   ismarried: true,
//   gender: undefined,
//   pets: null,
//   skills: [
//     "HTML",
//     "CSS",
//     "BOOTSTRAP",
//     "JAVASCRIPT",
//     ["DOM", "GRID SYSTEM", "FLEXBOX"],
//     "REACT",
//   ],

//   parents: {
//     f: "amrit",
//     m: "karuna",
//   },

//   bio: () => {
//     return "I love creating art";
//   },
// };

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

// const { name, phone,age= N/A, parents:{f}} = person;
// console.log(name, age,  parents); //anuska and undefined

// defaukt values
// age= N/A is giving empty / data instead of showing undefined

//es6 rest operator -- ...rest -- bundlesup propwrties
// const { name, phone, parents, ...restProperties } = person;
// console.log(restProperties); // gives all the remaining peoperties of the obj

// //es6 spread

// const career = {
//   tittle: "software engineer",
//   slary: "100k",
// };

// const combo = { ...career, ...person }; //copying all propertirs
// console.log(combo); //

//difference betwn rest and spread

// rest: const ... = ( ... is before equals to )
// copying the properties and dding to the same obj
// spread: const = ...career( .. is after equals to )
// combining ht epropertiesinto new obj

//copying data : shallow vs deep copy

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
// const p1 = person;

// old way
// const p1 =object.assign({}, person)

// shallow copy only copies first level data
// const p1= {...person}; //spread // deep copy

// restful api

// const p1 = JSON.stringify(person); // converting into json
// console.log(p1);

// const p2 = JSON.parse(JSON.stringify(person)); // converting back to js

// loops for obj

// for (let key in person) {
//   console.log(key);

//   console.log(person[key]);
// }

//converting obj into array

const personArg = Object.entries(person);
// .entries convets all the properties of the objects into array
//only the first level array.
//both name and anuska is in array

const personarr = Object.keys(person);
// .keys converts only the properties of the object into array
// only name is converted into array

const personar2 = Object.values(person);
//converts only values i.e anuska into array
