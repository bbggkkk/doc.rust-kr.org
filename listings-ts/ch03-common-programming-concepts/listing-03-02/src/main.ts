function main() {
    const condition = true;
    // Rust: let number = if condition { 5 } else { 6 };
    // TS: 삼항 연산자로 표현
    const number = condition ? 5 : 6;

    console.log(`The value of number is: ${number}`);
}

main();
