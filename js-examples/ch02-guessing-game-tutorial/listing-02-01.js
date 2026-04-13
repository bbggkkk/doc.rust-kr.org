const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  console.log("Guess the number!");

  rl.question("Please input your guess.\n", (guess) => {
    console.log(`You guessed: ${guess}`);
    rl.close();
  });
}

main();
