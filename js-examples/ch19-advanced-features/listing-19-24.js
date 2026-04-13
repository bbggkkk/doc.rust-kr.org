// 예제 19-24 ~ 19-25: 긴 타입에 타입 별칭 사용하기
// TypeScript에서 type 별칭으로 표현할 수 있습니다.

// TypeScript:
// type Thunk = () => void;
//
// function takes_thunk(f: Thunk) { f(); }
// function returns_thunk(): Thunk { return () => console.log("hi"); }

// JS에서는 타입 별칭이 불필요합니다 (동적 타이핑).
function takesLongFn(f) {
  f();
}

function returnsLongFn() {
  return () => console.log("hi");
}

takesLongFn(returnsLongFn());
