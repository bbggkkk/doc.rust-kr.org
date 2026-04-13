// 문자열의 내부적 표현 — 키릴 문자

const s = "Здравствуйте";
console.log(s.length); // 12 (UTF-16 코드 유닛 수)

// JavaScript의 length는 12를 반환합니다 (문자 수와 동일)
// Rust의 len()은 24를 반환합니다 (UTF-8 바이트 수)
// 키릴 문자는 UTF-8에서 각 2바이트, UTF-16에서 각 1코드유닛을 차지합니다
