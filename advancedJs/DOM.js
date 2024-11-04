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

// // ..... ... ... make modification.. //
// //change name
// const nameElm = document.querySelector("display");
// const val = nameElm.innerText;

// nameElm.innerText = "Anuska";
// console.log(val);

// //to add
// document.write(" Just adding through java script");

//////////////////-----attribute-------//////////////////
// const elm = document.getElementsByTagName ("a") [0];

// const val =elm.getAttribute("href");
// console.log(val);

// //elm.setAttribute("class", "test-a-class");

// elm.setAttribute("href", "https://google.om");

/////////////////----Style-------/////////////////
// elm.style.color ="red";
// elm.style.fontSize ="3rem";
// elm.style.textDecoration ="none";
// elm.style.backgroundColor ="black";

// const messageElm = document.querySelector(".message");
// // console.log(messageElm);

// console.log(messageElm.classList); // see al the class list
// messageElm.classList.add("danger");
// messageElm.classList.remove("server");

// console.log(messageElm.classList);

// messageElm.classList.toggle("emptyone"); // toggle- if  empty adds if present removes.

// const val = messageElm.classList.contains("danger");
// console.log(val);

/////////////// creating and appealing elements.////////////
const messageElm = document.querySelector(".message");
const newELm = document.createElement("div");

newELm.innerText = "This is new elm";

messageElm.append(newELm);
// messageElm.appendChild(newELm);
