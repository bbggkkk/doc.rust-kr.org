// 타입 별칭: type Kilometers = i32
// JS에는 타입 별칭이 없지만, TypeScript에서는 type 키워드로 표현합니다.

// TypeScript:
// type Kilometers = number;

// JS에서는 단순히 같은 타입을 사용합니다.
const x = 5;         // Kilometers
const y = 10;        // i32 (number)
const result = x + y;
console.log(`x + y = ${result}`); // 15
