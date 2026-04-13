const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  console.log("Guess the number!");

  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`The secret number is: ${secretNumber}`);

  rl.question("Please input your guess.\n", (answer) => {
    const guess = parseInt(answer, 10);

    console.log(`You guessed: ${guess}`);

    // Rust의 match + Ordering에 해당
    if (guess < secretNumber) {
      console.log("Too small!");
    } else if (guess > secretNumber) {
      console.log("Too big!");
    } else {
      console.log("You win!");
    }

    rl.close();
  });
}

main();
