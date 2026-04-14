const v = [100, 32, 57];
// Rust: *i += 50 (역참조 후 수정)
// TypeScript: 인덱스로 직접 수정
for (let i = 0; i < v.length; i++) {
    v[i] += 50;
}
