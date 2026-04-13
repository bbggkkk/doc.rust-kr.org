// Rust에서는 배열 범위를 넘어서면 런타임에 패닉이 발생합니다.
// JS에서는 범위를 넘어선 인덱스에 접근하면 undefined를 반환합니다.
const a = [1, 2, 3, 4, 5];
console.log(a[10]); // undefined (에러 없음)
// Rust는 이런 잘못된 메모리 접근을 방지합니다.
