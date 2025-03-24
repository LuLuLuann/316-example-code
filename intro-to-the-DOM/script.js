console.log("hello");

console.log(window); // will give you the DOM
// if you look for the document you look for the actual page you're working on -- ex: the html

console.log(window.document);
console.log(document); // does the same thing as window.document

// document is the root element in the tree structure

console.log(document.body); // we get just the body of the HTML

console.log(document.head); // we get just the head data

console.dir(document.body); // will see what is said and what is not - more detailed

const pTag = document.getElementById("intro");
console.log(pTag);

console.dir(document.body.firstElementChild); // targets the h1 in this case

console.dir(document.body.children);
// gets HTML collection

console.dir(document.body.children[1]);// targets p tag

// You won't really be using the console to look at the html. We will grab elements with the document.elementName

console.dir(document.body.children[1].innerText);

console.log(document.scripts);

const ul = document.querySelector("ul");

// console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// console.log(ul.childNodes);

console.log(ul.childNodes[3]);

console.log(ul.firstElementChild.nextElementSibling.children);

const newAnchor = document.createElement("a");
newAnchor.textContent = "Second Anchor"
console.log(newAnchor)

ul.firstElementChild.nextElementSibling.appendChild(newAnchor)

console.log(ul.firstElementChild.nextElementSibling.childNodes);

ul.firstElementChild.nextElementSibling.childNodes;

// query the div with the id app
const app = document.querySelector("#app")
console.log(app)
// append a new child div
app.appendChild(document.createElement("div"))

//create a new p element and set the text content
const p = document.createElement("p")
p.textContent = "Hello"

// append the p element to the div with id app
app.appendChild(p)
