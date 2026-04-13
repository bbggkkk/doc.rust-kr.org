// Rust의 트레이트 기본 구현 → JS에서는 부모 클래스의 메서드로 표현합니다
class Summarizable {
    // 기본 구현 — 서브클래스에서 오버라이드하지 않으면 이 메서드가 사용됩니다
    summarize() {
        return "(Read more...)";
    }
}

class NewsArticle extends Summarizable {
    // summarize()를 오버라이드하지 않으면 기본 구현이 사용됩니다
}
