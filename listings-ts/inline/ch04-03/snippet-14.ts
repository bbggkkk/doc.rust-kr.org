const a = [1, 2, 3, 4, 5];

// Rust: let slice = &a[1..3]; → &[i32] 타입 (배열 슬라이스)
const slice = a.slice(1, 3); // [2, 3]
// JS의 slice()는 새 배열을 복사하지만,
// Rust의 슬라이스는 원본 배열의 일부를 참조하는 뷰입니다 (복사 없이!)

console.assert(
    JSON.stringify(slice) === JSON.stringify([2, 3])
); // Rust: assert_eq!(slice, &[2, 3]);
