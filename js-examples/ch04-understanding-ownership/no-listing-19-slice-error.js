// Rust에서는 불변 슬라이스가 존재하는 동안 원본을 수정하면 컴파일 에러입니다.
// JS에서는 문자열이 불변이므로 원본을 직접 수정할 수 없습니다.
let s = "hello world";
const word = s.slice(0, s.indexOf(" ") === -1 ? s.length : s.indexOf(" "));
// s = ""; // 재할당은 가능하지만, word는 이미 복사된 값
console.log(word); // "hello"
// Rust는 슬라이스의 안전성을 컴파일 타임에 보장합니다.
