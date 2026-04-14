// Rust: if item == b' ' { return i; }
// 공백 문자를 찾으면 해당 인덱스를 반환합니다
if (item === " ") { // Rust: b' '는 공백의 바이트 리터럴
    return i;
}
// ...
return s.length; // Rust: s.len() - 공백을 찾지 못하면 전체 길이 반환
