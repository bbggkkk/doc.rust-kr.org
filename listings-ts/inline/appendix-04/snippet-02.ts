function doSomething() {}

// 밑줄 접두사로 '사용하지 않는 변수'임을 표시합니다.
// ESLint의 no-unused-vars 규칙도 _로 시작하는 변수는 무시하도록 설정할 수 있습니다.
for (let _i = 0; _i < 100; _i++) {
    doSomething();
}
