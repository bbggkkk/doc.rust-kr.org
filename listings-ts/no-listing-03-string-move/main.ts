// Rust: 소유권 이동 (move)
const s1 = "hello"; // Rust: String::from("hello") - 힙에 할당
const s2 = s1;       // Rust: s1의 소유권이 s2로 이동됩니다 (move)
                     // JS에서는 s1과 s2가 같은 문자열을 참조할 수 있지만,
                     // Rust에서는 이 시점 이후 s1을 사용할 수 없습니다!
                     // Rust는 같은 힙 데이터를 두 변수가 동시에 소유하는 것을 금지합니다
