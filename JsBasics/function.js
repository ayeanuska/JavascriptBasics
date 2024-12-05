// Function help us to choose the codes that we want to run every time page loads

const { func } = require("prop-types");

// maintable and more simpler coding
// 3 stages -
// create func
// call function
// invoke function

function sayHi(name, app) {
  const str =
    " hello world this is " +
    name +
    " , revising function basiccs in " +
    app +
    "";
  console.log(str);
}

sayHi("anu , vscode"); // calling function and invoke
sayHi("aye"); // dynaic using concat "+.+"
