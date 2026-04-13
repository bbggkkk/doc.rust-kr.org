import { createInterface } from "readline";

// Rust의 범위 검사 패턴 → JS에서도 동일하게 입력 값 범위를 검증합니다.
const secretNumber = Math.floor(Math.random() * 100) + 1;

function processGuess(input) {
    const guess = parseInt(input, 10);

    if (isNaN(guess)) {
        console.log("Please type a number!");
        return;
    }

    if (guess < 1 || guess > 100) {
        console.log("The secret number will be between 1 and 100.");
        return;
    }

    if (guess < secretNumber) {
        console.log("Too small!");
    } else if (guess > secretNumber) {
        console.log("Too big!");
    } else {
        console.log("You win!");
    }
}
