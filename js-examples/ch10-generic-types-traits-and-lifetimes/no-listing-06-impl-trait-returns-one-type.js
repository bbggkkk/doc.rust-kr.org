// Rust에서는 impl Trait 반환 타입으로 서로 다른 구체 타입을 반환할 수 없습니다.
// JS에서는 이런 제약이 없어서, 조건에 따라 다른 타입의 객체를 자유롭게 반환할 수 있습니다.
function returnsSummarizable(switchFlag) {
    if (switchFlag) {
        return {
            headline: "Penguins win the Stanley Cup Championship!",
            summarize() { return this.headline; }
        };
    } else {
        return {
            username: "horse_ebooks",
            content: "of course, as you probably already know, people",
            summarize() { return `${this.username}: ${this.content}`; }
        };
    }
}
