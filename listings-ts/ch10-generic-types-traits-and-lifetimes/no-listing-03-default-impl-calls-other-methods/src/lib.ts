// 기본 구현에서 다른 메서드 호출
interface Summary {
    summarizeAuthor(): string;

    // 기본 구현이 summarizeAuthor()를 호출
    summarize(): string;
}

// TS에서는 인터페이스에 기본 구현 불가 -> 추상 클래스 사용
abstract class SummaryBase implements Summary {
    abstract summarizeAuthor(): string;

    summarize(): string {
        return `(Read more from ${this.summarizeAuthor()}...)`;
    }
}
