// 기본 구현이 있는 트레이트 -> 추상 클래스 또는 기본 메서드
interface Summary {
    summarize(): string;
}

// 기본 구현을 제공하는 방법: 추상 클래스 사용
abstract class SummaryBase implements Summary {
    // 기본 구현
    summarize(): string {
        return "(Read more...)";
    }
}
