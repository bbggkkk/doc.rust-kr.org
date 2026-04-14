const numbers: [number, number, number, number, number] = [2, 4, 8, 16, 32];

// (first, .., last) → 첫 번째와 마지막만 추출
const [first, ..._rest] = numbers;
const last = numbers[numbers.length - 1];
console.log(`Some numbers: ${first}, ${last}`);
