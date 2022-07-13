import Cell from "./cell";
import Victories from "./victories";
import { Winner } from "./types";
import PlayerSelection from "./playerselection";

export default class Board {
  boardElement = document.getElementById("board") as HTMLElement;
  appElement = document.getElementById("app") as HTMLElement;
  size = 3;
  static boardState: Array<Array<Cell["id"]>> = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  static currentMove: PlayerSelection = PlayerSelection.X;

  static winner: Winner = "";

  constructor() {
    this.boardElement.innerHTML = "";
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.boardElement.appendChild(
          this.createCell(i, j, Board.boardState[i][j])
        );
      }
    }
    const oldMoveElement = document.getElementById(
      "move-element"
    ) as HTMLElement;

    if (oldMoveElement) {
      oldMoveElement.remove();
    }

    const moveElement = document.createElement("p") as HTMLParagraphElement;
    moveElement.id = "move-element";
    moveElement.innerText = Board.winner
      ? `Winner ${Board.winner}!`
      : `Next Move: ${Board.currentMove}`;
    moveElement.classList.add("current-move");
    this.appElement.insertBefore(moveElement, document.getElementById("reset"));
  }

  createCell(row: number, col: number, content: PlayerSelection) {
    const cell = document.createElement("div");
    cell.setAttribute("data-row", row.toString());
    cell.setAttribute("data-col", col.toString());
    cell.classList.add("cell");
    cell.style.width = `${Cell.width}px`;
    cell.style.height = `${Cell.height}px`;
    if (content === "") {
      cell.setAttribute("data-content", (content = ""));
    } else if (content === "X") {
      cell.setAttribute("data-content", (content = "X"));
    } else cell.setAttribute("data-content", (content = "O"));

    cell.addEventListener("click", () => {
      if (Board.winner) return;
      if (Board.boardState[row][col] === "") {
        Board.boardState[row][col] = Board.currentMove;
        Board.currentMove = Board.currentMove === "X" ? "O" : "X";
        Board.winner = this.checkBoard();
        new Board();
      }
    });

    return cell;
  }
  checkBoard(): Cell["id"] | "Draw" {
    for (let victory of Victories.victories) {
      const cell1 = Board.boardState[victory[0][0]][victory[0][1]];
      const cell2 = Board.boardState[victory[1][0]][victory[1][1]];
      const cell3 = Board.boardState[victory[2][0]][victory[2][1]];
      if (cell1 !== "" && cell1 === cell2 && cell2 === cell3) {
        return cell1;
      }
    }
    let isDraw = true;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (Board.boardState[i][j] === "") isDraw = false;
      }
    }
    if (isDraw) return "Draw";

    return "";
  }
}
