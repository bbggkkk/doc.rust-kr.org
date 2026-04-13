const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  console.log("Guess the number!");

  const secretNumber = Math.floor(Math.random() * 100) + 1;

  function askGuess() {
    rl.question("Please input your guess.\n", (answer) => {
      const guess = parseInt(answer, 10);

      if (isNaN(guess)) {
        // 숫자가 아닌 입력은 무시하고 다시 요청
        askGuess();
        return;
      }

      console.log(`You guessed: ${guess}`);

      if (guess < secretNumber) {
        console.log("Too small!");
        askGuess();
      } else if (guess > secretNumber) {
        console.log("Too big!");
        askGuess();
      } else {
        console.log("You win!");
        rl.close();
      }
    });
  }

  askGuess();
}

main();
