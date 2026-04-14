type UsState = "Alabama" | "Alaska" /* --생략-- */;

type Coin =
  | { kind: "Penny" }
  | { kind: "Nickel" }
  | { kind: "Dime" }
  | { kind: "Quarter"; state: UsState };

// match에서 값 바인딩 → switch + 타입 좁히기
function value_in_cents(coin: Coin): number {
  switch (coin.kind) {
    case "Penny": return 1;
    case "Nickel": return 5;
    case "Dime": return 10;
    case "Quarter": {
      // 패턴 바인딩 → 타입이 좁혀져 coin.state 접근 가능
      console.log(`State quarter from ${coin.state}!`);
      return 25;
    }
  }
}
