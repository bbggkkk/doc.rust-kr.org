// Rust의 @ 바인딩 → JS에서는 별도 변수와 조건을 사용

const msg = { type: "Hello", id: 5 };

if (msg.type === "Hello") {
  const id = msg.id;
  if (id >= 3 && id <= 7) {
    console.log(`Found an id in range: ${id}`);
  } else if (id >= 10 && id <= 12) {
    console.log(`Found an id in another range`);
  } else {
    console.log(`Found some other id: ${id}`);
  }
}
