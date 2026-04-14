// [does_not_compile] TypeScript에서는 const로 선언한 변수에 재할당할 수 없습니다
function main() {
    const x = 5;
    console.log(`The value of x is: ${x}`);
    // x = 6; // Error: const로 선언된 변수에 재할당할 수 없습니다
    // Rust에서 let은 기본적으로 불변(immutable)이므로 재할당이 불가능합니다
    console.log(`The value of x is: ${x}`);
}

main();
