let s1 = "foo";
const s2 = "bar";
s1 += s2;
console.log(`s2 is ${s2}`);
// TypeScript에서는 문자열이 불변 원시 타입이므로 s2는 항상 유효
