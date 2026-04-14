function main() {
    let s = "hello world"; // Rust: let mut s = String::from("hello world")

    const word = firstWord(s); // word는 값 5를 받습니다 (인덱스)

    s = ""; // Rust: s.clear() - 문자열을 비웁니다

    // word에는 여전히 5가 있지만, s가 비어있으므로 의미가 없습니다
    // JS에서도 이 문제는 동일합니다: 인덱스가 원본 데이터와 동기화되지 않습니다
    // Rust의 슬라이스는 이 문제를 컴파일 타임에 잡아냅니다!
    console.log(word); // 5 - 하지만 쓸모없는 값
}
