// #[derive(Debug)] → toString 자동 생성 대신 JSON.stringify 사용
type UsState = "Alabama" | "Alaska" /* --생략-- */;

type Coin =
  | { kind: "Penny" }
  | { kind: "Nickel" }
  | { kind: "Dime" }
  | { kind: "Quarter"; state: UsState };
