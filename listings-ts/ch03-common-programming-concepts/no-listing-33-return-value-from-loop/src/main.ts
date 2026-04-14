function main() {
    let counter = 0;

    // Rust: let result = loop { break counter * 2; };
    // TS에서는 루프가 값을 반환할 수 없으므로 별도 변수에 할당
    let result: number;
    while (true) {
        counter += 1;

        if (counter === 10) {
            result = counter * 2;
            break;
        }
    }

    console.log(`The result is ${result}`);
}

main();
