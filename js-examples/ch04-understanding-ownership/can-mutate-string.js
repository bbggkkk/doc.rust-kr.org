// Rust: let mut s = String::from("hello"); s.push_str(", world!");
let s = "hello";
s += ", world!"; // JS 문자열은 불변이지만, 새 문자열을 만들어 재할당
console.log(s); // hello, world!
