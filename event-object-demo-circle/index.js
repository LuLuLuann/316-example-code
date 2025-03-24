const app = document.getElementById("app");

// Create the initial circle to be attached to the mouse.
const mouseCircle = createCircle();
app.appendChild(mouseCircle);

// Helper function for making circles.
function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  newColors(circle);
  return circle;
}

// Helper function for placing circles.
function placeCircle(circle) {
  const copy = circle.cloneNode(true);
  app.appendChild(copy);
}

// Helper function for generating new colors.
function newColors(circle) {
  circle.style.backgroundColor = `rgba(${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )}, 255)`;
}

// Place the mouse circle at the current location,
// and switch the circle to a new color.
function handleClick() {
  placeCircle(mouseCircle);
  newColors(mouseCircle);
}

// Create a "painting" effect with pointerdown and pointerup. Cache the interval for cancelling.
let paintInterval;
function handleStart() {
  // the 10 milliseconds is the interval that we are using to draw the line 
  // if we make it more it would be more like a dotted line
  // 1000 milliseconds in a second
  paintInterval = setInterval(() => placeCircle(mouseCircle), 10);
  console.log("Interval ID: ", paintInterval);
}
function handleEnd() {
  // have to clearInterval or it will keep going like an infinity loop
  clearInterval(paintInterval);
  setTimeout(() => newColors(mouseCircle), 0);
}

// Moves the mouse circle alongside the mouse.
function handleMove(e) {
  console.log("Value Y:", e.y); // will show the y-axis
  console.log("Value X:", e.x); // will show the x-axis
  mouseCircle.style.top = e.y - 25 + "px";
  //event.x
  mouseCircle.style.left = e.x - 25 + "px";
}

// Register events!
app.addEventListener("click", handleClick);
app.addEventListener("pointerdown", handleStart); // when you press down on mouse button
app.addEventListener("pointerup", handleEnd); // when you lift up on the mouse button
app.addEventListener("pointermove", handleMove);
