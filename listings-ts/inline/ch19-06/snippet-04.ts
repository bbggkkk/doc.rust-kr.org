// Rust DeriveInput 구조체 — AST를 표현하는 데이터 구조
// TS에서는 ts-morph 또는 @babel/types의 AST 노드에 해당

interface DeriveInput {
  ident: { ident: string; span: string };
  data: {
    type: "Struct";
    fields: "Unit" | "Named" | "Unnamed";
  };
}

// 예: struct Pancakes; 를 파싱하면
const ast: DeriveInput = {
  ident: { ident: "Pancakes", span: "#0 bytes(95..103)" },
  data: { type: "Struct", fields: "Unit" },
};
