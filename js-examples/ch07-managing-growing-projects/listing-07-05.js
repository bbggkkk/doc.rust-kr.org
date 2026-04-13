// 예제 7-5: hosting 모듈을 pub으로 선언했지만 내용은 여전히 비공개
// Rust에서는 모듈을 공개해도 내부 아이템은 별도로 공개해야 합니다

// JavaScript에서는 export를 사용해 개별 아이템을 공개합니다
// 모듈 자체를 공개한다고 내부가 자동으로 공개되지 않는 점은 유사합니다

// hosting.js
// addToWaitlist를 export하지 않으면 외부에서 접근할 수 없습니다
function addToWaitlist() {} // export 안 함 — 비공개
