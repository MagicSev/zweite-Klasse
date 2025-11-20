import './styles.css';

type Player = 'red' | 'yellow';
type Cellstate = Player | 'empty' | 'green';
class ConnectFourGame {
  private boardElement: HTMLDivElement;
  private currentPlayer: Player = 'red';
  private board: Cellstate[][] = [];
  private cellElements: HTMLDivElement[][] = [];
  private checkPatterns = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: +1 },
    { x: 0, y: +1 },
    { x: +1, y: +1 },
    { x: +1, y: 0 },
    { x: +1, y: -1 },
  ];

  constructor() {
    this.boardElement = document.getElementById('colored-rect') as HTMLDivElement;
    this.createColumnControls();
    this.createBoardCells();
    this.createEmptyBoard();
  }
  private createEmptyBoard() {
    for (let row = 0; row < 6; row++) {
      let r: Cellstate[] = [];
      for (let column = 0; column < 7; column++) {
        r.push('empty');
      }
      this.board.push(r);
    }
  }
  private findAvailableRow(column: number): number {
    for (let row = 5; row >= 0; row--) {
      if (this.board[row]![column] === 'empty') {
        return row;
      }
    }
    return -1;
  }
  private createColumnControls() {
    for (let i = 0; i < 7; i++) {
      const control = document.createElement('div');
      control.className = 'column-control';
      control.textContent = '⬇';
      control.addEventListener('click', () => this.handleColumnClick(i));
      this.boardElement.appendChild(control);
    }
  }
  private createBoardCells() {
    // we create 6 rows and 7 columns of white circles(divs)
    for (let row = 0; row < 6; row++) {
      let rowElements: HTMLDivElement[] = [];
      for (let column = 0; column < 7; column++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        this.boardElement.appendChild(cell);
        rowElements.push(cell);
      }
      this.cellElements.push(rowElements);
    }
  }
  private handleColumnClick(columnIndex: number) {
    if (this.findAvailableRow(columnIndex) >= 0) {
      const targetRow = this.findAvailableRow(columnIndex);
      this.cellElements[targetRow]![columnIndex]!.classList.add(this.currentPlayer);
      this.board[targetRow]![columnIndex] = this.currentPlayer;


      if (this.checkGameStatus() === 'red') {
        this.endgame('red');
      } 
      else if (this.checkGameStatus() === 'yellow') {
        this.endgame('yellow');
      }
      if (this.isFull()) {
        this.endgame('green');
      }
      this.switchPlayer();
    }
  }
  private switchPlayer() {
    if (this.currentPlayer === 'red') {
      this.currentPlayer = 'yellow';
    } else {
      this.currentPlayer = 'red';
    }
  }
  private isFull() {
    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 7; x++) {
        if (this.board[y]![x] === 'empty') {
          return false;
        }
      }
    }
    return true;
  }
  private checkGameStatus(): Cellstate {
    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 7; x++) {
        if (this.board[y]![x] === this.currentPlayer) {
          for (let i = 0; i < this.checkPatterns.length; i++) {
            const checkPattern = this.checkPatterns[i]!;
            if (
              y + checkPattern.y > 5 ||
              y + checkPattern.y < 0 ||
              y + checkPattern.y * 2 > 5 ||
              y + checkPattern.y * 2 < 0 ||
              y + checkPattern.y * 3 > 5 ||
              y + checkPattern.y * 3 < 0
            ) {
              continue;
            }
            if (
              x + checkPattern.x > 6 ||
              x + checkPattern.x < 0 ||
              x + checkPattern.x * 2 > 6 ||
              x + checkPattern.x * 2 < 0 ||
              x + checkPattern.x * 3 > 6 ||
              x + checkPattern.x * 3 < 0
            ) {
              continue;
            }

            if (
              this.board[y + checkPattern.y * 1]![x + checkPattern.x * 1] === this.currentPlayer &&
              this.board[y + checkPattern.y * 2]![x + checkPattern.x * 2] === this.currentPlayer &&
              this.board[y + checkPattern.y * 3]![x + checkPattern.x * 3] === this.currentPlayer
            ) {
              console.log(this.currentPlayer);
              return this.currentPlayer;
            }
          }
        }
      }
    }
    return 'empty';
  }
  private endgame(color: string) {
    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 7; x++) {

        this.board[y]![x] === color;
        this.cellElements[y]![x]?.classList.remove("red","yellow")
        this.cellElements[y]![x]?.classList.add(color);
      }
    }
  }
}
const game = new ConnectFourGame();