type UsState = "Alabama" | "Alaska" /* --생략-- */;
type Coin =
  | { kind: "Penny" }
  | { kind: "Nickel" }
  | { kind: "Dime" }
  | { kind: "Quarter"; state: UsState };

const coin: Coin = { kind: "Penny" };

let count = 0;
// if let Coin::Quarter(state) = coin → if (coin.kind === "Quarter")
if (coin.kind === "Quarter") {
  console.log(`State quarter from ${coin.state}!`);
} else {
  count += 1;
}
