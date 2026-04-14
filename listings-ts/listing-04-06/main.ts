// Rust에서는 컴파일 에러! 불변 참조자(&)로 빌린 값은 수정할 수 없습니다
// JS에서는 정상 동작합니다 - JS에는 불변 참조 개념이 없습니다

function main() {
    const s = "hello"; // Rust: String::from("hello")

    change(s);
}

// JS에서는 문자열이 불변이지만, 객체라면 자유롭게 수정 가능합니다
// Rust에서는 &String (불변 참조자)으로 받았으므로 수정이 불가능합니다
// 수정하려면 &mut String (가변 참조자)이 필요합니다
function change(someString: string) {
    // someString += ", world"; // JS 문자열도 불변이라 재할당 필요
    // Rust: some_string.push_str(", world") → 컴파일 에러!
    // 불변 참조자(&)로는 값을 변경할 수 없습니다
}

main();
