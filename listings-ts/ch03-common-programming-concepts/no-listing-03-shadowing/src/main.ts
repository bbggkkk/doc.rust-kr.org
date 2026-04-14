function main() {
    const x = 5;

    // Rust의 섀도잉: 같은 이름으로 새 변수 선언
    // TS에서는 블록 스코프 내에서 let으로 재선언하여 유사하게 표현
    const x2 = x + 1; // 섀도잉된 x (값: 6)

    {
        const x3 = x2 * 2; // 안쪽 스코프에서 섀도잉 (값: 12)
        console.log(`The value of x in the inner scope is: ${x3}`);
    }

    console.log(`The value of x is: ${x2}`); // 바깥 스코프의 x (값: 6)
}

main();
