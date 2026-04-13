// 예제 8-22: 해시맵에 삽입하면 소유권이 이동합니다

const fieldName = "Favorite color";
const fieldValue = "Blue";

const map = new Map();
map.set(fieldName, fieldValue);

// JavaScript에서는 삽입 후에도 원래 변수를 계속 사용할 수 있습니다
console.log(fieldName);  // "Favorite color" — 여전히 유효
console.log(fieldValue); // "Blue" — 여전히 유효

// Rust에서는 String 값의 소유권이 해시맵으로 이동되어
// 삽입 후에는 field_name과 field_value를 사용할 수 없습니다
