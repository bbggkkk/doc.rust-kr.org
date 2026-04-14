// 트레이트 바운드로 같은 타입 강제
function notify<T extends Summary>(item1: T, item2: T): void {
    // item1과 item2는 반드시 같은 타입이어야 함
}
