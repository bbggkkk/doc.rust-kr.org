const numbers: [number, number, number, number, number] = [2, 4, 8, 16, 32];

// 튜플에서 일부만 사용 → 구조 분해에서 무시
const [first, , third, , fifth] = numbers;
console.log(`Some numbers: ${first}, ${third}, ${fifth}`);
