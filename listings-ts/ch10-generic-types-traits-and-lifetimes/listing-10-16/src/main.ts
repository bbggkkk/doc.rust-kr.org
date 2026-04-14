// 댕글링 참조 예시 - JS/TS에서는 가비지 컬렉터가 있어 발생하지 않음
function main() {
    let r: number;

    {
        const x = 5;
        r = x; // JS는 값 복사이므로 문제없음
        // Rust에서는 r = &x; 이후 x가 스코프를 벗어나면 댕글링 참조
    }

    console.log(`r: ${r}`);
    // Rust: 컴파일 에러! x의 라이프타임이 r보다 짧음
    // JS/TS: 문제없이 동작 (값이 복사됨, 참조가 아님)
}

main();
