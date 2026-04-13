// JS에서는 불변/가변 구분 없이 항상 참조로 캡처하여 변경 가능
const list = [1, 2, 3];
console.log("Before defining closure:", list);

const borrowsMutably = () => list.push(7);

borrowsMutably();
console.log("After calling closure:", list); // [1, 2, 3, 7]
