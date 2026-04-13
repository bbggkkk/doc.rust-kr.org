// std::mem::drop으로 값을 일찍 버리기
// Rust: drop(c)로 스코프 끝나기 전에 값을 해제
// JS: 변수를 null로 설정하거나 블록 스코프를 활용

// Rust:
//   let c = CustomSmartPointer { data: "some data" };
//   drop(c);  // 여기서 즉시 해제
//   println!("CustomSmartPointer dropped before end of main.");

// JS에서 유사하게:
{
  let c = { data: "some data" };
  console.log(`CustomSmartPointer created with '${c.data}'`);
  // 스코프를 벗어나면 GC 대상이 됨 (즉시 해제는 보장 안 됨)
}
console.log("CustomSmartPointer dropped before the end of main.");

// 또는 명시적으로 참조를 제거:
let d = { data: "other data" };
d = null; // GC 대상으로 만들기
