// ESLint/clippy와 비슷하게, 하드코딩된 근사값 대신
// Math.PI를 사용하는 것이 좋습니다.
const x = 3.1415; // lint 경고: Math.PI를 사용하세요
const r = 8.0;
console.log(`the area of the circle is ${x * r * r}`);
