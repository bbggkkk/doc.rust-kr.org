// 범위 검사 패턴
while (true) {
    // --생략--

    const guess: number = parseInt(input);
    if (isNaN(guess)) continue;

    if (guess < 1 || guess > 100) {
        console.log("The secret number will be between 1 and 100.");
        continue;
    }

    // guess와 secretNumber 비교
    // --생략--
}
