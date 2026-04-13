// Rust에서는 같은 데이터에 대해 두 개의 가변 참조자를 만들 수 없습니다.
// JS에서는 같은 객체를 여러 변수가 참조하고 수정할 수 있습니다.
const s = { value: "hello" };
const r1 = s;
const r2 = s;
r1.value = "world"; // 정상 동작
console.log(r2.value); // "world" - 같은 객체를 참조
// Rust는 데이터 경합을 방지하기 위해 이를 컴파일 타임에 제한합니다.
