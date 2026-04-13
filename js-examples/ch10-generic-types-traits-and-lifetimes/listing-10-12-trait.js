// Rust의 트레이트 → JS에서는 인터페이스 개념이 없으므로
// 클래스 상속이나 덕 타이핑으로 유사하게 표현합니다.
// 아래는 summarize 메서드를 가진 "인터페이스"를 추상 클래스로 표현한 것입니다.
class Summary {
    summarize() {
        throw new Error("summarize() must be implemented");
    }
}
