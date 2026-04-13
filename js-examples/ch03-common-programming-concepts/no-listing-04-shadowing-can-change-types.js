// Rust 섀도잉: 같은 이름으로 다른 타입의 새 변수 선언 가능
// JS는 동적 타입이므로 같은 변수에 다른 타입 값을 자유롭게 할당 가능
let spaces = "   ";
spaces = spaces.length; // JS: 타입이 string → number로 변경 OK ✅
// Rust에서 mut으로는 이것이 불가 — 타입이 바뀌므로 반드시 섀도잉 필요
