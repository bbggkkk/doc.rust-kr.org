type Coin =
  | { kind: "Penny" }
  | { kind: "Nickel" }
  | { kind: "Dime" }
  | { kind: "Quarter" };

function value_in_cents(coin: Coin): number {
  switch (coin.kind) {
    case "Penny": {
      console.log("Lucky penny!");
      return 1;
    }
    case "Nickel": return 5;
    case "Dime": return 10;
    case "Quarter": return 25;
  }
}
