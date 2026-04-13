// Rust의 impl + enum 메서드 → JS에서는 객체에 메서드를 직접 추가
// 또는 클래스 기반으로 구현 가능
function createMessage(type, data = {}) {
    return {
        type,
        ...data,
        call() {
            // 메서드 본문이 여기 정의될 것입니다
        },
    };
}

const m = createMessage('Write', { text: 'hello' });
m.call();
