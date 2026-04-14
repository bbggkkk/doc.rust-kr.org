// Rust에서는 impl Trait 반환 시 하나의 구체 타입만 반환 가능
// TS에서는 인터페이스를 반환 타입으로 사용하면 어떤 구현체든 반환 가능
function returnsSummarizable(switchVal: boolean): Summary {
    if (switchVal) {
        return new NewsArticle(
            "Penguins win the Stanley Cup Championship!",
            "Pittsburgh, PA, USA",
            "Iceburgh",
            "The Pittsburgh Penguins once again are the best hockey team in the NHL.",
        );
    } else {
        return new Tweet(
            "horse_ebooks",
            "of course, as you probably already know, people",
            false,
            false,
        );
    }
    // Rust에서는 컴파일 에러! (impl Trait는 하나의 타입만 반환 가능)
    // TS에서는 문제없이 동작
}
