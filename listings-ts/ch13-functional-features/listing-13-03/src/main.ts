// Rust: let example_closure = |x| x;
// TypeScript에서는 타입 추론이 호출 시점이 아닌 정의 시점에 결정됨
const exampleClosure = (x: string) => x;

const s = exampleClosure("hello"); // OK
// const n = exampleClosure(5);    // 에러! string 타입으로 이미 고정됨

// TypeScript에서 제네릭으로 다형성을 표현하려면:
const genericClosure = <T>(x: T): T => x;
const s2 = genericClosure("hello"); // OK
const n2 = genericClosure(5);       // OK
