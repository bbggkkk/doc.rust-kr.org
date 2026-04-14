const scores = new Map<string, number>();

scores.set("Blue", 10);
scores.set("Blue", 25); // 기존 값 덮어쓰기

console.log(Object.fromEntries(scores)); // { Blue: 25 }
