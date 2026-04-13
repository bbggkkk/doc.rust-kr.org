const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  console.log("Guess the number!");

  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`The secret number is: ${secretNumber}`);

  rl.question("Please input your guess.\n", (guess) => {
    console.log(`You guessed: ${guess}`);
    rl.close();
  });
}

main();
