// Rust: for (i, &item) in bytes.iter().enumerate()
// iter()는 반복자를 생성하고, enumerate()는 (인덱스, 값) 튜플을 반환합니다
// JS에서는 entries()가 비슷한 역할을 합니다:
for (const [i, item] of Array.from(s).entries()) {
    // i = 인덱스, item = 각 문자
}
