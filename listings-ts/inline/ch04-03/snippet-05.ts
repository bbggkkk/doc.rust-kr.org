// Rust: fn second_word(s: &String) -> (usize, usize)
// 슬라이스 없이는 시작/끝 인덱스를 따로 관리해야 합니다
function secondWord(s: string): [number, number] {
    // 관리할 인덱스가 점점 늘어나고, 원본과 동기화가 안 되는 문제 발생!
    return [0, 0]; // 시작 인덱스, 끝 인덱스
}
