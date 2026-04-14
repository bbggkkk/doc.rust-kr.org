// Rust에서는 컴파일 에러! JS에서는 정상 동작합니다

function main() {
    let s = "hello world"; // Rust: let mut s = String::from("hello world")

    const word = firstWord(s); // Rust: 불변 참조자(&str)를 받습니다

    // Rust: s.clear() → 컴파일 에러!
    // word가 s의 불변 슬라이스(참조)를 갖고 있는 동안
    // s를 변경(clear)하려면 가변 참조자가 필요한데,
    // 불변 참조자와 가변 참조자는 동시에 존재할 수 없습니다!
    s = ""; // JS에서는 문제없지만 Rust에서는 대여 규칙 위반

    console.log(`the first word is: ${word}`);
    // JS: word는 독립적인 문자열이므로 "hello"가 출력됩니다
    // Rust: 컴파일러가 이 버그를 사전에 방지합니다
}

main();
