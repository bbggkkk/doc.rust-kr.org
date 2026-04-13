// Rust: 기본 구현에서 다른 트레이트 메서드 호출
// JS: 기본 메서드에서 하위 클래스가 구현할 메서드를 호출
class Summary {
    summarizeAuthor() {
        throw new Error("summarizeAuthor() must be implemented");
    }
    summarize() {
        return `(Read more from ${this.summarizeAuthor()}...)`;
    }
}
