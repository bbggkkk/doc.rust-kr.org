// [does_not_compile] mut 변수는 타입을 변경할 수 없습니다
let spaces: string = "   ";
// spaces = spaces.length; // Error: number 타입을 string 변수에 할당할 수 없습니다
// Rust에서 let mut은 값은 바꿀 수 있지만, 타입은 바꿀 수 없습니다
