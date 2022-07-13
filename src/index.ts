import Board from "./board";
import PlayerSelection from "./playerselection";

const chooseTypeElement = document.getElementById(
  "chooseType"
) as HTMLDivElement;
const choosePlayerTypeButton = document.getElementById(
  "choosePlayerType"
) as HTMLButtonElement;

class InitGame {
  constructor() {
    const resetButton = document.getElementById("reset") as HTMLElement;
    if (!resetButton) throw new Error("No reset button");
    resetButton.addEventListener("click", () => {
      Board.boardState = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      Board.currentMove = PlayerSelection.X;
      Board.winner = "";
      this.choosingPlayerType();
      new Board();
    });
    this.choosingPlayerType();
    new Board();
  }
  choosingPlayerType() {
    chooseTypeElement.classList.add("show");
    choosePlayerTypeButton.addEventListener("click", () => {
      chooseTypeElement.classList.remove("show");
    });
  }
}

const initGame = new InitGame();
