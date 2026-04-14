// Rust: fn first_word(s: &String) -> usize
// 슬라이스 없이 첫 단어의 끝 인덱스를 반환하는 방식
function firstWord(s: string): number {
    // Rust: s.as_bytes() - 문자열을 바이트 배열로 변환
    // JS에서는 문자열을 직접 인덱싱할 수 있습니다

    for (let i = 0; i < s.length; i++) {
        // Rust: bytes.iter().enumerate() → (인덱스, &바이트) 튜플
        if (s[i] === " ") { // Rust: item == b' '
            return i;
        }
    }

    return s.length; // Rust: s.len()
}
