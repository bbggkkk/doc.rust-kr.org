// @ 바인딩 → 값을 캡처하면서 범위 테스트
type Message = { kind: "Hello"; id: number };

const msg: Message = { kind: "Hello", id: 5 };

if (msg.kind === "Hello") {
  const { id } = msg;
  if (id >= 3 && id <= 7) {
    // id_variable @ 3..=7 → 범위 내 값을 캡처
    console.log(`Found an id in range: ${id}`);
  } else if (id >= 10 && id <= 12) {
    console.log("Found an id in another range");
  } else {
    console.log(`Found some other id: ${id}`);
  }
}
