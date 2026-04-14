type UsState = "Alabama" | "Alaska" /* --생략-- */;
type Coin =
  | { kind: "Penny" }
  | { kind: "Nickel" }
  | { kind: "Dime" }
  | { kind: "Quarter"; state: UsState };

const coin: Coin = { kind: "Penny" };

let count = 0;
// match → switch
switch (coin.kind) {
  case "Quarter":
    console.log(`State quarter from ${coin.state}!`);
    break;
  default:
    count += 1;
    break;
}
