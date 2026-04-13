// Rust의 여러 값을 채널로 보내기 → JS의 async generator 패턴

async function* channelSender() {
  const vals = ["hi", "from", "the", "thread"];
  for (const val of vals) {
    await new Promise((r) => setTimeout(r, 1000)); // 1초 대기
    yield val;
  }
}

async function main() {
  for await (const received of channelSender()) {
    console.log(`Got: ${received}`);
  }
}

main();
