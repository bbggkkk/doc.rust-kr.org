// Rust: 타입 별칭 Thunk으로 반복 줄이기
// JavaScript에서는 JSDoc이나 주석으로 타입 별칭을 표현합니다

/** @typedef {function(): void} Thunk */

/** @param {Thunk} f */
function takesLongType(f) {
  f();
}

/** @returns {Thunk} */
function returnsLongType() {
  return () => console.log("hi");
}

const f = returnsLongType();
takesLongType(f); // hi
