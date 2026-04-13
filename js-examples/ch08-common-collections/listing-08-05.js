// 예제 8-5: 범위를 벗어난 인덱스에 접근하기

const v = [1, 2, 3, 4, 5];

// JavaScript에서는 범위를 벗어난 인덱스 접근 시 패닉 대신 undefined를 반환합니다
const element = v[100];
console.log(element); // undefined

// Rust에서는 &v[100]이 패닉을 일으키고,
// v.get(100)은 None을 반환합니다
