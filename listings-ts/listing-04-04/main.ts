function main() {
    const s1 = givesOwnership();         // Rust: 반환값의 소유권이 s1으로 이동

    const s2 = "hello";                  // Rust: String::from("hello")

    const s3 = takesAndGivesBack(s2);    // Rust: s2의 소유권이 함수로 이동되고,
                                         // 반환값의 소유권이 s3로 이동됩니다
                                         // JS에서는 s2를 계속 사용할 수 있지만,
                                         // Rust에서는 s2가 이동되어 사용 불가!
}
// Rust: s3 → drop으로 메모리 해제, s2는 이동됨, s1 → drop으로 해제
// JS: GC가 알아서 처리

function givesOwnership(): string {
    const someString = "yours"; // Rust: String::from("yours")
    return someString;          // Rust: 소유권이 호출자에게 이동됩니다
}

function takesAndGivesBack(aString: string): string {
    return aString; // Rust: 받은 소유권을 다시 호출자에게 이동시킵니다
}

main();
