const tweet = new Tweet(
    "horse_ebooks",
    "of course, as you probably already know, people",
    false,
    false,
);

// 기본 구현의 summarize()가 summarizeAuthor()를 호출
console.log(`1 new tweet: ${tweet.summarize()}`);
