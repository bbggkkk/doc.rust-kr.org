// Rust의 move 클로저 → JS Worker의 postMessage
// move는 소유권을 스레드로 이동시킵니다.
// JS Worker에서는 structuredClone으로 데이터가 복사됩니다.

const v = [1, 2, 3];

// Rust: thread::spawn(move || { println!("{:?}", v); })
// JS: Worker에 데이터 전달
const workerCode = `
  self.onmessage = (e) => {
    console.log("Here's a vector:", e.data);
  };
`;
const blob = new Blob([workerCode], { type: "text/javascript" });
const worker = new Worker(URL.createObjectURL(blob));
worker.postMessage(v); // v가 복사되어 전달됨

// Worker 완료 대기 (handle.join())
worker.onmessage = () => worker.terminate();
