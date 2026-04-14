const v = [1, 2, 3, 4, 5];

// TypeScript에서는 범위 밖 인덱스 접근 시 undefined 반환 (패닉 없음)
const does_not_exist = v[100];   // undefined
const does_not_exist2 = v.at(100); // undefined
// Rust에서는 &v[100]이 패닉을 일으키고, v.get(100)은 None을 반환함
