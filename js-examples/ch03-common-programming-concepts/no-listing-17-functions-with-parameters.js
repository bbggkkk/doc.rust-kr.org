function main() {
    anotherFunction(5);
}

// Rust: fn another_function(x: i32) → 매개변수 타입 명시 필수
// JS: 타입 명시 불필요 (TypeScript라면 x: number)
function anotherFunction(x) {
    console.log(`The value of x is: ${x}`);
}

main();
