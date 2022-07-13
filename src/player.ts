import PlayerSelection from "./playerselection";
import { PlayerType } from "./playertype";

export default class Player {
  id!: string;
  selection!: PlayerSelection;
  type!: PlayerType;
  constructor(id: string, selection: PlayerSelection, type: PlayerType) {
    this.id = id;
    this.selection = selection;
    this.type = type;
  }
}
