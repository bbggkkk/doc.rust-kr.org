// match 갈래에서 여러 줄의 코드 실행하기

const Coin = Object.freeze({
  Penny: "Penny",
  Nickel: "Nickel",
  Dime: "Dime",
  Quarter: "Quarter",
});

function valueInCents(coin) {
  switch (coin) {
    case Coin.Penny:
      console.log("Lucky penny!");
      return 1;
    case Coin.Nickel:
      return 5;
    case Coin.Dime:
      return 10;
    case Coin.Quarter:
      return 25;
  }
}
