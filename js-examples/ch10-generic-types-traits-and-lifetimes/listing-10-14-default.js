// Rust의 기본 구현이 있는 트레이트 → JS의 기본 메서드가 있는 클래스
class Summary {
    summarize() {
        return "(Read more...)";
    }
}

class NewsArticle extends Summary {
    constructor(headline, location, author, content) {
        super();
        this.headline = headline;
        this.location = location;
        this.author = author;
        this.content = content;
    }
    // summarize를 오버라이드하지 않으므로 기본 구현이 사용됩니다
}
