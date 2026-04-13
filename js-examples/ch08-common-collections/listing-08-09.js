// JS 배열은 타입 제한이 없으므로 열거형 없이 다양한 타입을 직접 저장 가능
const row = [3, "blue", 10.12];

// 타입을 명시적으로 구분하고 싶다면 객체로 태그 추가
const rowTagged = [
    { type: "Int", value: 3 },
    { type: "Text", value: "blue" },
    { type: "Float", value: 10.12 },
];
