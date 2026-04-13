// Rust: pub enum → JS: export const (열거형 대체)
// JS에는 내장 enum이 없으므로 객체로 표현합니다.

export const Appetizer = Object.freeze({
  Soup: "Soup",
  Salad: "Salad",
});

// 사용
const order1 = Appetizer.Soup;
const order2 = Appetizer.Salad;
console.log(order1, order2);
