const stack: number[] = [];

stack.push(1);
stack.push(2);
stack.push(3);

// while let Some(top) = stack.pop() → while + null 체크
let top: number | undefined;
while ((top = stack.pop()) !== undefined) {
  console.log(top);
}
