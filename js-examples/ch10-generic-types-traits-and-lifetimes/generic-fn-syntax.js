// Rust: fn largest<T>(list: &[T]) -> &T { ... }
// JS에서는 동적 타이핑이므로 제네릭 문법이 필요 없습니다.
// 어떤 타입의 배열이든 하나의 함수로 처리할 수 있습니다.
function largest(list) {
    let largest = list[0];
    for (const item of list) {
        if (item > largest) {
            largest = item;
        }
    }
    return largest;
}
