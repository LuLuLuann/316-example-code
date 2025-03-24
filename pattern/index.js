const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myForm.querySelector("input").value}`);
});

const paragraph = "the quick brown fox jumps over the lazy dog. It barked.";

// literal regex
// case sensitive
const regex = /fox/;
const regex1 =/lazy dog/;
const regex2 = /the/;
const regex3 = /the/gi;

//METHODS OF REGEX
// execute method - returns array matching the regex
console.log("Exe: ", regex.exec(paragraph));
// test method - returns a boolean. trus if regex was able to match the string provided
console.log("Test: ", regex.test(paragraph));

// METHODS OF STRINGS -- more helpful
console.log(paragraph.match(regex));
console.log(paragraph.match(regex1));

const updatedStr = paragraph.replace(regex, "tiger");

console.log(updatedStr);

console.log(paragraph.match(regex2)); 