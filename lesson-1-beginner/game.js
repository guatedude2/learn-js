"use strict"

class Game {
  constructor() {
    this.board = [];
    this.playerTurn = 1;
    this.resetBoard();
  }

  resetBoard() {
    this.board = [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' '
    ];
  }

  renderBoard() {
    var output = [];
    var temp = [];

    for (var i = 0; i < this.board.length; i++ ) {
      temp.push(this.board[i]);
      if (i % 3 == 2) {
        output.push(temp.join(' | '));
        temp = [];
      }
    }

    console.log(output.join('\n- + - + -\n') + '\n');
  }

  playerMark(pos) {
    if (isNaN(pos) || pos < 1 || pos > this.board.length) {
      return -1;
    }

    if (this.board[pos - 1] !== ' ') {
      console.log('Spot has already been marked.');
    } else if (this.playerTurn === 1) {
      this.board[pos - 1] = 'X';
      this.playerTurn = 2;
    } else {
      this.board[pos - 1] = 'O';
      this.playerTurn = 1;
    }

    if (this.checkWinner('X')) {
      return 1;
    } else if (this.checkWinner('O')){
      return 2;
    }

    return 0;
  }

  checkWinner(mark) {

    // Hint:
    // 012
    // 345
    // 678
    const b = this.board;

    return (
      // Check Horizontal
      (b[0] === mark && b[0] === b[1] && b[1] === b[2]) ||
      (b[3] === mark && b[3] === b[4] && b[4] === b[5]) ||
      (b[6] === mark && b[6] === b[7] && b[7] === b[8]) ||
      // Check Vertical
      (b[0] === mark && b[0] === b[3] && b[3] === b[6]) ||
      (b[1] === mark && b[1] === b[4] && b[4] === b[7]) ||
      (b[2] === mark && b[2] === b[5] && b[5] === b[8]) ||
      // Check Diagonals
      (b[0] === mark && b[0] === b[4] && b[4] === b[8]) ||
      (b[2] === mark && b[2] === b[4] && b[4] === b[6])
    );
  }
};

module.exports = new Game();