// match를 사용하여 쿼터 동전의 주 이름을 출력하면서 나머지 동전을 세기

const UsState = Object.freeze({ Alabama: "Alabama", Alaska: "Alaska" });

function createCoin(type, state) {
  return { type, state };
}

let count = 0;
const coin = createCoin("Quarter", UsState.Alaska);

switch (coin.type) {
  case "Quarter":
    console.log(`State quarter from ${coin.state}!`);
    break;
  default:
    count += 1;
    break;
}
