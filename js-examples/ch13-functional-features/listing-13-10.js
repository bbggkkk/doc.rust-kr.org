// 반복자 생성하기
// Rust: let v1_iter = v1.iter();
// JS: 배열은 기본적으로 이터러블(iterable)입니다.

const v1 = [1, 2, 3];

// JS에서 반복자(iterator)를 명시적으로 생성
const v1Iter = v1[Symbol.iterator]();

// Rust와 마찬가지로, 반복자를 생성하는 것만으로는
// 아무 일도 일어나지 않습니다. 소비해야 동작합니다.
