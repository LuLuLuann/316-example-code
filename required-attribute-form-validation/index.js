const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    // normal funtionality is to submit the form data to a backend place so we want to prevent that default -- the page won't reload, info won't be lost and it won't take as much memory 
    // modern way is to use the fetch API
  e.preventDefault();
  alert(`You submitted: 
  ${myForm.querySelector("input").value}`);
});
