// Rust: quote! 매크로로 HelloMacro 트레이트 구현 코드 생성
// JavaScript에서는 템플릿 리터럴로 코드 문자열을 생성할 수 있습니다

function generateHelloMacroImpl(typeName) {
  return `
class ${typeName} {
  helloMacro() {
    console.log("Hello, Macro! My name is ${typeName}!");
  }
}
`;
}

const code = generateHelloMacroImpl("Pancakes");
console.log("생성된 코드:", code);
