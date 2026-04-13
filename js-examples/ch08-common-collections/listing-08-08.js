const v = [100, 32, 57];
// Rust의 *i += 50 (역참조 후 수정) -> JS에서는 인덱스로 직접 수정
for (let i = 0; i < v.length; i++) {
    v[i] += 50;
}
// 또는 map으로 새 배열 생성: const v2 = v.map(i => i + 50);
