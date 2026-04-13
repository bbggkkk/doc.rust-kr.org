// 기본 구현 호출
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
}

const article = new NewsArticle(
    "Penguins win the Stanley Cup Championship!",
    "Pittsburgh, PA, USA",
    "Iceburgh",
    "The Pittsburgh Penguins once again are the best hockey team in the NHL."
);

console.log(`New article available! ${article.summarize()}`);
