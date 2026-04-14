// Rust에서는 컴파일 에러! 댕글링 참조를 방지합니다
// JS에서는 GC 덕분에 이 문제가 발생하지 않습니다

function main() {
    const referenceToNothing = dangle();
    console.log(referenceToNothing); // JS: "hello" 출력 (GC가 메모리 관리)
}

function dangle(): string {
    const s = "hello"; // Rust: String::from("hello") - 함수 내에서 생성
    return s;          // Rust: &s를 반환하려 하면 컴파일 에러!
    // Rust: s는 함수가 끝나면 drop되므로, &s는 해제된 메모리를 가리키게 됩니다
    // JS: GC가 참조가 있는 한 메모리를 유지하므로 이런 문제가 없습니다
}

main();
