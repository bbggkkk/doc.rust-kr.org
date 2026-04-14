// Rust: fn first_word(s: &str) -> &str
// 매개변수를 &String 대신 &str로 받으면 더 유연합니다
// String의 슬라이스와 문자열 리터럴 모두 받을 수 있습니다
// JS에서는 string 타입 하나로 모든 문자열을 처리합니다
function firstWord(s: string): string {
    // 구현...
    return s.split(" ")[0] ?? s;
}
