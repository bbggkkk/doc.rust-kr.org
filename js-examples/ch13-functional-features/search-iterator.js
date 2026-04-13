// search 함수 — 반복자 어댑터 버전
// Rust의 lines().filter().collect()와 유사하게
// JS에서도 split/filter 체인을 사용합니다.

function search(query, contents) {
  return contents
    .split("\n")
    .filter((line) => line.includes(query));
}

// 사용 예시
const contents = `Rust:
safe, fast, productive.
Pick three.
Trust me.`;

console.log(search("rust", contents.toLowerCase()));
// ["rust:", "trust me."]
