// Rust: let mut s = String::from("hello");
// Rust에서 String은 힙에 할당되고 변경 가능합니다 (mut 키워드 필요)
let s = "hello";

s += ", world!"; // JS에서는 문자열이 불변이지만, += 연산자가 새 문자열을 생성합니다
                 // Rust의 push_str()은 기존 String에 직접 추가합니다 (재할당 없이)

console.log(s); // "hello, world!" 출력
