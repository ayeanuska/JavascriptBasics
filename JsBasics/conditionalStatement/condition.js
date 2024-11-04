///// control flow or conditional statement //////////

// 1 . if statement : if statement
// if is a global function

// truthy: true , +venum ,-venum , "string", "string w space ",
//        {},[], ()=>{ }
// even empty Object, array and function are true

// falsy: false, 0, NaN,"", null, undefined

// if (condition if true){
//     //statement 1
//     console.log("you pass");

// }

// using if condition.
const age = 20;
const vip = true;
if (((age) => 18 && age < 50) || vip === true) {
  console.log("welcome to the coding party");
}

// 2. for if else
else {
  console.log("sorry you are not allowed");
}

// 3. Else if

if (conditiona) {
  //statement 1
} else if (conditionb) {
  //statement 2
} else if (conditionc) {
  //statement 3
} else {
  //run default code
}

///4. switch

// switch(condition){
//     case true : console.log(yes);
// }

const pet = cat;
switch (pet) {
  case "cat":
    console.log(Meowwwww);
    break;
  case "dog":
    console.log(whoof);
    break;
  case "cow":
    console.log(mooooo);
    break;

  default:
    console.log("no sound available sorry");
}

/////////////////////logical operators///////////
// (!) - converts truthy to false and vice.
// && - and
// || -or
//  tenary:
//  condition1 ? // runs when condition is :
//  //else  runthis code:

const agee = 90;
agee < 50 ? console.log("welcome") : console.log("go home");
