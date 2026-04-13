// Rust의 Mutex<T> → JS에는 뮤텍스가 필요 없습니다 (싱글 스레드).
// 하지만 개념적으로 유사한 캡슐화를 보여줍니다.

class MutexLike {
  #value;
  constructor(val) {
    this.#value = val;
  }
  // 값에 접근하려면 반드시 이 메서드를 통해야 합니다
  lock(fn) {
    fn(this.#value, (newVal) => (this.#value = newVal));
  }
  toString() {
    return `MutexLike { value: ${this.#value} }`;
  }
}

const m = new MutexLike(5);

m.lock((val, set) => {
  set(val + 1); // *num = 6에 해당
});

console.log(`m = ${m}`); // m = MutexLike { value: 6 }
