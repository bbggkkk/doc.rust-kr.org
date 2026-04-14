// 튜플 구조체 → 브랜드 타입으로 구분
type Color = [number, number, number] & { __brand: "Color" };
type Point = [number, number, number] & { __brand: "Point" };

const black = [0, 0, 0] as Color;
const origin = [0, 0, 0] as Point;
