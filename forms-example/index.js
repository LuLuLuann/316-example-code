const form = document.getElementById("register");
console.log(form);

// nested elements
console.log(form.elements);

const username = form.elements.username;

const email = form.elements.email;

console.log(username);
console.log(email);

// fires on every input
username.addEventListener("input", function (e) {
    console.log(e);
    console.log("Data prop: ", e.data);
    console.log("Value: ", e.target.value);

    const value = e.target.value;
    if (["user1"].includes(value)) {
        console.log(`Sorry username: ${value} is taken.`);
    }
})

// fires when the user changes inputs
email.addEventListener("change", function(e){
    console.log(e.target.value);

    const value = e.target.value;

    if (["abc123@gmail.com"].includes(value)){
        console.log(`Email already exists ${value}`)
    }
});

// fires when the user submits the form
form.addEventListener('submit', function(e){
    // prevents page from reloading and you from losing the data
    e.preventDefault();
    console.log(e);

    const userData = {
        username, 
        email
    }
    console.log(`Sending data ${username}...`)
})


// applicaton tab and local storage and click your page that you're on
//can store user login info there
//can only be a string
//JSON.stringify to make the JS into a string

// get a value into the local storage
localStorage.setItem("user", "user1")
localStorage.setItem("email", "user1@test.com")

// can get a value by passing the key name
const loggedInUser = localStorage.getItem("user"); 
console.log(loggedInUser); // user1

console.log(localStorage); 

//remove a value by passing in the key
const returnValue = localStorage.removeItem("email"); // doesn't return anything --> void
localStorage.removeItem("email")

localStorage.setItem("user", "user123")
localStorage.setItem("age", 29)

//this will concatenate everything -- bc it's a string now not an array
//you'd have to parse the array into a string first
localStorage.setItem("players1", ["user99", "user88"]); // players user99,user88
const players1 = localStorage.getItem("players1");
console.log(players1); 

const arr = ["user99", "user88"]
console.log(JSON.stringify(arr))
localStorage.setItem("players2", JSON.stringify(arr))
const players2 = JSON.parse(localStorage.getItem("players2")); 
console.log(players2)
// will clear all
// localStorage.clear()


// not found = returns "null"
if (localStorage.getItem("cart")){
console.log(localStorage.getItem("cart"));
} else {
    console.log("item not found");
    localStorage.setItem("cart", JSON.stringify(["apples", "keyboard"]))
}
//stored in browser on local storage -- closed and doesn't clear unless you clear it for a website
// session storage is cleared every time you close it


// localStorage we can store information on our browsers. 
// Most common use? cookies. So we don't have to login every time, or keeps our preferences.
// Here we are showing how to access it, and how to add info to it
// don't want private info in there because it needs to be encrypted -- not social, credit card, password, email, account number
// authentication token would be stored in the local storage instead 

//clearing cookies you delete browsing history not the local Storage. 
// local Storage for authentication not for browsing history
// you have to right click and delete it manually from the dev tools -- be careful that you're not deleting their authentication token so you can still log into the page
//localStorage should be for a better userExperience -- like light mode vs dark mode, language preference, 