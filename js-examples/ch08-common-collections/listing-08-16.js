// 예제 8-16: 문자열 슬라이스를 추가한 후에도 원본 사용 가능

let s1 = "foo";
const s2 = "bar";

s1 += s2; // JavaScript에서는 문자열이 불변이므로 새 문자열이 생성됩니다

console.log(s2); // "bar" — s2는 여전히 유효합니다

// Rust에서도 push_str은 s2의 소유권을 가져가지 않으므로
// s2를 계속 사용할 수 있습니다
