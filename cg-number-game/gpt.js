// Select elements from the DOM
const app = document.getElementById("app");
const guessContainer = document.getElementById("guesses");

// Create and append the table
const table = document.createElement("table");
app.appendChild(table);

// Populate the table with numbers 1-100
for (let i = 0; i < 10; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);

  for (let j = 1; j <= 10; j++) {
    const num = i * 10 + j;
    const td = document.createElement("td");
    td.id = `guess${num}`;
    td.textContent = num;
    tr.appendChild(td);
  }
}

// Generate a random number between 1 and 100
const ans = Math.floor(Math.random() * 100) + 1;

// Initialize guess count
let count = 10;
guessContainer.textContent = `Guesses left: ${count}`;

// Add event listener to start the game
document.getElementById("startButton").addEventListener("click", askForGuess);

function askForGuess() {
  if (count <= 0) {
    alert(`Game over! The correct number was ${ans}.`);
    return;
  }

  let input = prompt(`Guess a number between 1 and 100! You have ${count} guesses left.`);

  // Validate input
  let guess = parseInt(input, 10);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("❌ Invalid input. Please enter a number between 1 and 100.");
    askForGuess(); // Recursively ask again
    return;
  }

  checkGuess(guess);
}

// Function to check if the guess is correct
function checkGuess(guess) {
  if (guess === ans) {
    changeBG(guess, null);
    alert("🎉 Congratulations! You guessed correctly!");
    return;
  } else {
    count--;
    guessContainer.textContent = `Guesses left: ${count}`;

    if (count === 0) {
      alert(`Game over! The correct number was ${ans}.`);
      return;
    }

    const hint = guess < ans ? "higher" : "lower";
    changeBG(guess, hint);

    setTimeout(() => {
      askForGuess();
    }, 500);
  }
}

// Function to update the table cell background colors
function changeBG(num, hint) {
  if (hint === "higher") {
    for (let i = 1; i <= num; i++) {
      document.getElementById(`guess${i}`).style.backgroundColor = "red";
    }
  } else if (hint === "lower") {
    for (let i = num; i <= 100; i++) {
      document.getElementById(`guess${i}`).style.backgroundColor = "red";
    }
  } else {
    document.getElementById(`guess${num}`).style.backgroundColor = "limegreen";
  }
}
