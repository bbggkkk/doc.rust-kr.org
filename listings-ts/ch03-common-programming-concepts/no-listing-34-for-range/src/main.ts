function main() {
    // Rust: (1..4).rev() → 3, 2, 1 (범위를 역순으로)
    // TS에서는 범위(Range)가 없으므로 일반 for 루프 사용
    for (let number = 3; number >= 1; number--) {
        console.log(`${number}!`);
    }
    console.log("LIFTOFF!!!");
}

main();
