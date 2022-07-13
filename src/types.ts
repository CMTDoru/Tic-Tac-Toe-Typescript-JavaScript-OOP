import Cell from "./cell";

export type Winner = Cell["id"] | "Draw";
export type Turn = "X" | "O";
export type Coordinate = [number, number];
export type Victory = [Coordinate, Coordinate, Coordinate];
export type Color = string;
