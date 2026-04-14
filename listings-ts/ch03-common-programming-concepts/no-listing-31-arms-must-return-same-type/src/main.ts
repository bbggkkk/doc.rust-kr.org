// [does_not_compile] Rust에서는 if/else 갈래의 타입이 동일해야 합니다
function main() {
    const condition = true;

    // Rust: let number = if condition { 5 } else { "six" }; // 에러!
    // TS에서는 유니온 타입으로 허용되지만, Rust는 정적 타입이 일치해야 합니다
    const number: number | string = condition ? 5 : "six"; // TS에서는 허용
    // Rust에서는 컴파일 에러: if/else 갈래의 타입이 다릅니다

    console.log(`The value of number is: ${number}`);
}

main();
