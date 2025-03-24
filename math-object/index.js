// ### Guided Exercise: The Math Object

/**
 * The Math namespace object contains static properties and methods for mathematical constants and functions.
 */

/* ### Objective: Practice using common Math methods to solve real-world problems.
 * Use the MDN Reference to solve the challenges:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

// Todo 1: Round numbers for display.
// - Round up `4.5678` to 5 using Math.round()
let num = 4.5678;
num = Math.round(num); // <- update code here
console.log("Rounded number:", num);

// Todo 2: Floor numbers for display.
// - Floor `4.5678` to 4 using Math.round()
let num1 = 4.5678;
num1 = Math.floor(num1); // <- update code here
console.log("Floored number:", num1);

// Todo 3: Generate a random number.
// - Use Math.random()
let randNum = Math.random(); // <- update code here
console.log("Random number:", randNum);

// Todo 3.1: Generate a random number between 0 and 1.
// - Use Math.random() * 2, then wrap it inside Math.floor()
let randNum1 = Math.floor(Math.random() * 2); // <- update code here
console.log("Random number between 0 and 1:", randNum1);

// Todo 3.2: Generate a random number between 1 and 2
// - Use Math.random() * 2, then wrap it inside Math.floor(), then add 1
let randNum2 = Math.floor(Math.random()) + 1; // <- update code here
console.log("Random number between 1 and 2:", randNum2);

// Todo 4: Generate a random number between 1 and 100.
// - Use Math.random() * 100, then wrap it around a Math.floor(), then add 1.
let randomNumber = Math.floor(Math.random() * 100) + 1; // <- update code here
console.log(randomNumber);

// Todo 5: Find the largest and smallest numbers in a set.
// - Create an array of numbers and use `Math.max()` and `Math.min()`.
let numbers = [15, 28, 3, 47, 22];
let smallest = Math.max(...numbers); // <- update code here
let largest = Math.min(...numbers); // <- update code here
console.log(smallest);
console.log(largest);

// Todo 6: Calculate the area of a circle given its radius.
// - Use `Math.PI` and `Math.pow()`.
// Multiply: PI * pow(radius, 2)
let radius = 5;
let area = Math.PI * Math.pow(radius, 2); // <- update code here
console.log("Area of circle:", area);

// Todo 7: Simulate rolling a 6-sided dice 10 times.
// - Combine `Math.random()` with `Math.floor()`.
// - Use Math.random() * 6, then wrap it inside Math.floor() and then add 1.
for (let i = 1; i <= 10; i++) {
  let diceRoll = Math.floor(Math.random() * 6) + 1; // <- update code here
  console.log(`Roll ${i}: ${diceRoll}`);
}
