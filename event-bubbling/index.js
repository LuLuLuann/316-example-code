// Using anonymous functions to register event listeners on each of the elements we're interested in.

// can list all of them or list separately if you only have "body" and click on the button it will bubble up to the parent element and show "clicked the body!"

// The button.
document.getElementById("myBtn").addEventListener("click", () => {
    console.log("Clicked the button!");
  });
  
  // The div containing the button.
  document.querySelector("div").addEventListener("click", () => {
    console.log("Clicked the containing div!");
  });
  
  // The document body (containing the div).
  document.body.addEventListener("click", () => {
    console.log("Clicked the body!");
  });
  
  // The document HTML element (containing the body).
  document.documentElement.addEventListener("click", () => {
    console.log("Clicked the HTML element!");
  });
  
  // The document itself.
  document.addEventListener("click", () => {
    console.log("Clicked the document!");
  });
  