// Rust: clone()으로 힙 데이터까지 깊은 복사
// JS: 문자열은 불변이므로 복사 개념 자체가 다름
let s1 = "hello";
let s2 = s1; // JS 문자열은 불변이라 공유해도 안전

// JS에서 깊은 복사가 필요한 경우는 객체:
const obj1 = { name: "hello" };
const obj2 = structuredClone(obj1); // 깊은 복사 (Rust의 clone과 유사)
const obj3 = { ...obj1 };           // 얕은 복사
