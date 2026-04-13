// 같은 키로 set()을 다시 호출하면 값이 덮어써짐
const scores = new Map();
scores.set("Blue", 10);
scores.set("Blue", 25);
console.log(scores); // Map { 'Blue' => 25 }
