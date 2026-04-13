// Rust의 entry().or_insert(0) + 역참조 증가 -> JS의 Map으로 단어 빈도 세기
const text = "hello world wonderful world";
const map = new Map();

for (const word of text.split(" ")) {
    map.set(word, (map.get(word) ?? 0) + 1);
}

console.log(map); // Map { 'hello' => 1, 'world' => 2, 'wonderful' => 1 }
