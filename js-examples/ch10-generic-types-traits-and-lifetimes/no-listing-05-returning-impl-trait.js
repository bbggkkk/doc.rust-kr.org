// Rust: fn returns_summarizable() -> impl Summary
// JS에서는 반환 타입 제약이 없으므로, 어떤 객체든 반환할 수 있습니다.
function returnsSummarizable() {
    return {
        username: "horse_ebooks",
        content: "of course, as you probably already know, people",
        reply: false,
        retweet: false,
        summarize() {
            return `${this.username}: ${this.content}`;
        }
    };
}
