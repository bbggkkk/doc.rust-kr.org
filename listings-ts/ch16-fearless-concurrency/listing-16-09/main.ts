// Rust에서는 send() 후 값의 소유권이 이전되어 재사용 불가합니다.
// JS에서는 postMessage가 값을 복사하므로 원본을 계속 사용할 수 있습니다.

const { port1: tx, port2: rx } = new MessageChannel();

setTimeout(() => {
  const val = "hi";
  tx.postMessage(val);
  // Rust: val을 send한 후 사용하면 컴파일 에러!
  // JS: 값이 복사되므로 원본은 여전히 사용 가능
  console.log(`val is ${val}`); // JS에서는 OK!
}, 0);

rx.onmessage = (event) => {
  console.log(`Got: ${event.data}`);
};
rx.start();
