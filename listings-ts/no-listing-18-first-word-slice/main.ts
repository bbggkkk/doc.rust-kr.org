// Rust: fn first_word(s: &String) -> &str
// 이제 인덱스가 아닌 문자열 슬라이스(원본의 참조)를 반환합니다
function firstWord(s: string): string {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            return s.slice(0, i); // Rust: &s[0..i] - 슬라이스 반환
        }
    }

    return s.slice(); // Rust: &s[..] - 전체 문자열 슬라이스
    // JS의 slice()는 새 문자열을 복사하지만,
    // Rust의 &s[..]는 원본 데이터를 참조하는 뷰입니다
}
