const readline = require('readline');
const game = require('./game');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    game.renderBoard();
    rl.question(`Player ${game.playerTurn}: `, function (x) {
        const result = game.playerMark(x)
        if (x === 'q' || x === 'Q') {
          rl.close();
          return;
        } else if (result === -1) {
          console.log('Invalid action.\nEnter a digit from 1 - 9 to place an \'X\' or \'O\' on the corresponding spot on the board or type \'q\' to quit the game.')
        } else if (result !== 0) {
          game.renderBoard();
          console.log(`Player ${result} wins!\nGame Over\n`);
          rl.close();
          return;
          r
        }
        main();
    });
}

console.log('TIC-TAC-TOE\n');
main();