function main() {
    // Rust: let mut s = String::from("hello");
    // mut으로 선언해야 가변 참조자를 만들 수 있습니다
    let s = "hello";

    // Rust: change(&mut s) - 가변 참조자를 전달합니다
    // JS에서는 객체를 전달하면 자유롭게 수정 가능하지만,
    // Rust에서는 &mut로 명시적으로 "수정 가능한 빌림"을 표시해야 합니다
    s = change(s);
    console.log(s); // "hello, world"
}

// Rust: fn change(some_string: &mut String)
// &mut String = 가변 참조자: 빌린 값을 수정할 수 있습니다
function change(someString: string): string {
    return someString + ", world"; // Rust: some_string.push_str(", world")
}

main();
