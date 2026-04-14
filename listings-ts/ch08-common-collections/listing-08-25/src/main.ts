const text = "hello world wonderful world";

const map = new Map<string, number>();

for (const word of text.split(" ")) {
    // Rust: entry(word).or_insert(0) 후 값 증가
    const count = map.get(word) ?? 0;
    map.set(word, count + 1);
}

console.log(Object.fromEntries(map));
// { hello: 1, world: 2, wonderful: 1 }
