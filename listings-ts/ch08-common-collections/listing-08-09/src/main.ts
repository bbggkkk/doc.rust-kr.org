// Rust의 enum + Vec → TypeScript의 유니온 타입 + 배열
type SpreadsheetCell =
    | { kind: "Int"; value: number }
    | { kind: "Float"; value: number }
    | { kind: "Text"; value: string };

const row: SpreadsheetCell[] = [
    { kind: "Int", value: 3 },
    { kind: "Text", value: "blue" },
    { kind: "Float", value: 10.12 },
];
