function main() {
    // Rust에서는 블록이 표현식이 될 수 있습니다
    // TS에서는 즉시 실행 함수(IIFE)로 유사하게 표현할 수 있습니다
    const y = (() => {
        const x = 3;
        return x + 1; // Rust: 세미콜론 없이 x + 1 → 표현식으로 반환
    })();

    console.log(`The value of y is: ${y}`);
}

main();
