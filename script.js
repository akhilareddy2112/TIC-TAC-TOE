let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
const resultElement = document.getElementById('result');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver || gameBoard[index] !== '') return;
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWin();
        switchPlayer();
    });
});

resetButton.addEventListener('click', resetGame);

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winConditions) {
        if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]] !== '') {
            gameOver = true;
            resultElement.textContent = `Player ${gameBoard[condition[0]]} wins!`;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameOver = true;
        resultElement.textContent = 'It\'s a draw!';
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    cells.forEach(cell => {
        cell.textContent = '';
    });
    resultElement.textContent = '';
}
