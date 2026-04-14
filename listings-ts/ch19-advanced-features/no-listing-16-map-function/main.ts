// 명명된 함수를 map에 전달 — TS에서도 동일하게 가능

const listOfNumbers = [1, 2, 3];
// Rust: list_of_numbers.iter().map(ToString::to_string)
// TS: 함수 참조를 직접 전달
const listOfStrings: string[] =
  listOfNumbers.map(String);
