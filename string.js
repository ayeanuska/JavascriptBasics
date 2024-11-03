let fullName = "Anuska" + " " + "Shrestha";
console.log(fullName);

console.log(
  `Hello! my name is ${fullName}. I am refining my js knowledge here. `
);

const productName = new String(`Digitalization`);

console.log(productName);

console.log(productName.length);
console.log(productName.toUpperCase());
console.log(productName.charAt(3));
console.log(productName.indexOf("p"));
const newProduct = productName.substring(0, 4); // "Head" wil be displayed
console.log(newProduct);

// from Start Index to the End index (exclusive)
productName.slice(-3); // 'ion'
productName.slice(-3, -1); // 'io'
productName.slice(0, -1); // 'Digitalizatio'
productName.slice(4, -1); // 'atio'

const address = " Hornsby ";
// console.log(address);
console.log(address.trim());

const url = " https://github.com/ayeanuska";
console.log(url.includes("Anuska"));
