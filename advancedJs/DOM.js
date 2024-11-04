// Document Object Model

/* 
 ------------process------------
connect html and js 
find node
 and modify 
//  */

// console.log(window); // browser capacity
// console.log(document); //html that you write (content)

// first find and grab which elements you wqant to change
// const elm = document.getElementById("first");
// console.log(elm);

// document.getElementsByClassName
// select the first found value
// const elm= document.querySelector("p")

// select all p = document.querySelectorAll("p") // can use css selector way

// const elm = document.querySelector(".first");
// const str = elm.innerHTML; //  including element
// const str2 = elm.innerText; // only text

// console.log(str);

// ..... ... ... make modification.. //
//change name
const nameElm = document.querySelector("display");
const val = nameElm.innerText;

nameElm.innerText = "Anuska";
console.log(val);

//to add
document.write(" Just adding through java script");
