// Rust의 match + Option 패턴 매칭 → JS의 조건문

function matchOption(x) {
  if (x == null) {
    return null;
  }
  return x + 1;
}
