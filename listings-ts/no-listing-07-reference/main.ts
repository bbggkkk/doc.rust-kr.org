function main() {
    const s1 = "hello"; // Rust: String::from("hello")

    // Rust: &s1 - s1의 참조자를 전달 (소유권은 이동하지 않음)
    // JS에서는 객체/문자열이 항상 참조로 전달되므로 이 개념이 자연스럽습니다
    const len = calculateLength(s1);

    // Rust: s1은 여전히 유효합니다 (소유권이 이동되지 않았으므로)
    console.log(`The length of '${s1}' is ${len}.`);
}

// Rust: s: &String - String의 참조자를 받습니다 (빌림, borrow)
// JS에서는 모든 비원시 타입이 참조로 전달되므로 별도 문법이 필요 없습니다
function calculateLength(s: string): number {
    return s.length;
} // Rust: s는 참조자이므로 소유권이 없어서 drop이 호출되지 않습니다
