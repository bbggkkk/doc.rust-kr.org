type Coin =
  | { kind: "Penny" }
  | { kind: "Nickel" }
  | { kind: "Dime" }
  | { kind: "Quarter" };

// match → switch
function value_in_cents(coin: Coin): number {
  switch (coin.kind) {
    case "Penny": return 1;
    case "Nickel": return 5;
    case "Dime": return 10;
    case "Quarter": return 25;
  }
}
