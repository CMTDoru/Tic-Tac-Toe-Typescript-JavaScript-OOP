// No uses for this class at the moment.

// class Board {
//  boardElement = document.getElementById('board')
//  size = 3
//  boardState = [
//     ["x", "", ""],
//     ["", "x", ""],
//     ["", "", "x"]
// ]


// constructor() {
//     this.boardElement.innerHTML=''
//     for(let i = 0; i < this.size; i++){
//         for(let j = 0; j< this.size; j++){
//             this.boardElement.appendChild(this.createCell(i, j, this.boardState[i][j]))
//         }
//     }
// }

// createCell(row, col, content) {
//     const cell = document.createElement('div')
//     cell.setAttribute("data-row", row.toString())
//     cell.setAttribute("data-col", col.toString())
//     cell.setAttribute("data-content", content)
//     cell.classList.add('cell')

//     return cell
// }

// }

// const gameStart = new Board