// Rust의 &s[0..5] → JS의 s.slice(0, 5)

const s = "hello world";

const hello = s.slice(0, 5);   // "hello"
const world = s.slice(6, 11);  // "world"

console.log(hello, world);
