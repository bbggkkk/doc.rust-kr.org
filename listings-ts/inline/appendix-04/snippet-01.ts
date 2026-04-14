function doSomething() {}

// ESLint: 'i' is defined but never used (@typescript-eslint/no-unused-vars)
for (let i = 0; i < 100; i++) {
    doSomething();
}
