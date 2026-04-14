// Rust에서는 라이프타임 문제로 컴파일 에러
// TS에서는 GC 덕분에 문제없이 동작
function main() {
    const string1 = "long string is long";
    let result: string;
    {
        const string2 = "xyz";
        result = longest(string1, string2);
    }
    // Rust: string2가 스코프를 벗어났으므로 result 사용 시 에러
    // TS: 문자열이 값 타입이므로 문제없음
    console.log(`The longest string is ${result}`);
}

main();
