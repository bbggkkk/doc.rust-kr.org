// fn returns_summarizable() -> impl Summary
// TS: 반환 타입이 Summary를 구현하는 타입
function returnsSummarizable(): Summary {
    return new Tweet(
        "horse_ebooks",
        "of course, as you probably already know, people",
        false,
        false,
    );
}
