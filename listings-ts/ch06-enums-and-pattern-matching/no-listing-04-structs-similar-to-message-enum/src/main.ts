// 각 배리언트를 개별 타입으로 정의하면 하나의 타입으로 묶기 어렵다
interface QuitMessage {} // 빈 인터페이스
interface MoveMessage {
  x: number;
  y: number;
}
type WriteMessage = string; // 래퍼
type ChangeColorMessage = [number, number, number]; // 튜플
