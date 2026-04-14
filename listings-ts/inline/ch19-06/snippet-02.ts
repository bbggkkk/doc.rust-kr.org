// macro_rules! — 컴파일 타임 코드 생성 (TS에는 동등한 기능 없음)
// vec![1, 2, 3]이 확장되면 아래와 같은 코드가 됨:

const tempVec: number[] = [];
tempVec.push(1);
tempVec.push(2);
tempVec.push(3);
// tempVec === [1, 2, 3]
