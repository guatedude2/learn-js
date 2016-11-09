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

    //TODO: Check if pos is valid
    //TODO: Mark board
    //TODO: Change turns

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

    //TODO: Check winner
  }
};

module.exports = new Game();