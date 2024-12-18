const gameMenu = document.querySelector(".game-menu");
const containerGame = document.querySelector(".container-game");
const xButton = document.querySelector(".option-X");
const oButton = document.querySelector(".option-O");
const xSvg = document.querySelector(".xSvg");
const oSvg = document.querySelector(".oSvg");
const newGameYellow = document.querySelector(".yellow");
const newGameBlue = document.querySelector(".blue");
const xPlayer1 = document.querySelector(".x-you");
const oPlayer2 = document.querySelector(".oo");
const restart = document.querySelector(".restart");
const containerRestart = document.querySelector(".container-restart");
const gridContainer = document.querySelectorAll(".grid");
const turnIcon = document.querySelector(".icon");
const quitBtn = document.querySelectorAll(".quit-btn");
const nextRoundBtn = document.querySelectorAll(".next-round-btn");
const containerPlayer = document.querySelector(".container-player");
const containerAIWins = document.querySelector(".container-ai-wins");
const containerAIWinsX = document.querySelector(".container-ai-wins-X");
const containerPlayer1 = document.querySelector(".container-player1-wins");
const containerPlayer1WinsX = document.querySelector(".container-player1-wins-X");
const containerPlayer2Wins = document.querySelector(".container-player2-wins");
const containerPlayer2WinsYellow = document.querySelector(".container-player2-wins-yellow");
const Cancel = document.querySelector(".cancel-btn");
const RestartB = document.querySelector(".yes-btn");
const roundTied = document.querySelector('.container-round-tied');

const xSvgGame = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>';
const oSvgGame = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>';
const turnX = '<svg viewBox="0 0 64 64" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#A8BFC9" fill-rule="evenodd"/></svg>'
const turnO = '<svg viewBox="0 0 64 64" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#A8BFC9"/></svg>'
const xSvgUnfilled = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z" stroke="#31C3BD" stroke-width="2" fill="none"/></svg>'
const oSvgUnfilled = '<svg width="66" height="66" xmlns="http://www.w3.org/2000/svg"><path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" stroke="#F2B137" stroke-width="2" fill="none"/></svg>'

let player1 = 'O';
let player2 = 'X';
let currentPlayer = player2;
let state = 2;
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
let boardGame = [];
let gameMode = ' ';
let scoreX = 0;
let scoreTies = 0;
let scoreO = 0; 

xButton.addEventListener("click", () => {
    xButton.style.backgroundColor = '#A8BFC9';
    oButton.style.backgroundColor = '#1A2A33';
    xSvg.style.fill = '#1A2A33';
    oSvg.style.fill = '#A8BFC9';
    player1 = 'X';
    player2 = 'O';
    currentPlayer = player1;
    turnIcon.innerHTML = turnX;
});

oButton.addEventListener("click", () => {
    xButton.style.backgroundColor = '#1A2A33';
    oButton.style.backgroundColor = '#A8BFC9';
    xSvg.style.fill = '#A8BFC9';
    oSvg.style.fill = '#1A2A33';
    player1 = 'O';
    player2 = 'X';
    currentPlayer = player2;
});

newGameYellow.addEventListener("click", () => {
    gameMenu.style.display = 'none';
    containerGame.style.display = 'flex';
    xPlayer1.innerText = player1 === 'X' ? 'X (YOU)' : 'X (AI)';
    oPlayer2.innerText = player2 === 'O' ? 'O (AI)' : 'O (YOU)';
    gameMode = "AI";
});

newGameBlue.addEventListener("click", () => {
    gameMenu.style.display = 'none';
    containerGame.style.display = 'flex';
    xPlayer1.innerText = player1 === 'X' ? 'X (PLAYER 1)' : 'X (PLAYER 2)';
    oPlayer2.innerText = player2 === 'O' ? 'O (PLAYER 2)' : 'O (PLAYER 1)';
    gameMode = "PVP";
});

restart.addEventListener("click", () => {
    containerRestart.style.display = 'flex';
    // document.body.style.backgroundColor = 'rgb(13, 21, 25)';
});

quitBtn.forEach(button => {
    button.addEventListener("click", () => {
        containerPlayer.style.display = 'none';
        containerAIWins.style.display = 'none';
        containerAIWinsX.style.display = 'none';
        containerPlayer1.style.display = 'none';
        containerPlayer1WinsX.style.display = 'none';
        containerPlayer2Wins.style.display = 'none';
        containerPlayer2WinsYellow.style.display = 'none';
        containerGame.style.display = 'none';
        roundTied.style.display = 'none';
        gameMenu.style.display = 'flex';
        resetGame();
    })
})

nextRoundBtn.forEach(button => {
    button.addEventListener("click", () => {
        containerPlayer.style.display = 'none';
        containerAIWins.style.display = 'none';
        containerAIWinsX.style.display = 'none';
        containerPlayer1.style.display = 'none';
        containerPlayer1WinsX.style.display = 'none';
        containerPlayer2Wins.style.display = 'none';
        containerPlayer2WinsYellow.style.display = 'none';
        roundTied.style.display = 'none';
        resetBoard();
    })
})

Cancel.addEventListener("click", () => {
    containerRestart.style.display = 'none';
})

RestartB.addEventListener("click", () => {
    containerRestart.style.display = 'none';
    resetBoard();
    currentPlayer = 'X';
    updateTurnDisplay();
})

gridContainer.forEach(button => {
    button.addEventListener("mouseenter", () => {
        const classList = button.classList;
        const row = parseInt(classList[0].split("-")[1]);
        const col = parseInt(classList[0].split("-")[2]);
        if(board[row][col] != ' ') return;
        const cell = document.querySelector(`.block-${row}-${col}`);
        if(currentPlayer == 'X'){
            cell.innerHTML = xSvgUnfilled;
        }
        else{
            cell.innerHTML = oSvgUnfilled;
        }
    })
    button.addEventListener("mouseleave", () => {
        const classList = button.classList;
        const row = parseInt(classList[0].split("-")[1]);
        const col = parseInt(classList[0].split("-")[2]);
        if(board[row][col] != ' ') return;
        const cell = document.querySelector(`.block-${row}-${col}`);
        if(currentPlayer == 'X'){
            cell.innerHTML = '';
        }
        else{
            cell.innerHTML = '';
        }
    })
    button.addEventListener("click", () => {
        const classList = button.classList;
        const row = parseInt(classList[0].split("-")[1]);
        const col = parseInt(classList[0].split("-")[2]);
        if(board[row][col] != ' ') return;
        if(gameMode == 'AI'){
            if(currentPlayer == player1){
                handleClick(row, col);
                if(check_win(board, player1)){
                    updateScore(player1);
                    containerPlayer.style.display= 'flex';
                    disableGrid();
                }
                else if(check_draw(board)){
                    updateScore('TIE');
                    document.querySelector('.container-round-tied').style.display = 'flex';
                    disableGrid();
                }
                else{
                    currentPlayer = player2;
                    updateTurnDisplay();
                    aiMove();
                }
            }
            else if(currentPlayer == player2){
                aiMove();
                updateTurnDisplay();
                currentPlayer = player1;
            }
        }
        else if(gameMode == 'PVP'){
            handleClick(row, col);
            if(check_win(board, currentPlayer)){
                updateScore(currentPlayer);
                if(currentPlayer == player1 && currentPlayer == 'X'){
                    document.querySelector('.container-player1-wins-X').style.display = 'flex';
                    disableGrid();
                }
                else if(currentPlayer == player2 && currentPlayer == 'O'){
                    document.querySelector('.container-player2-wins-yellow').style.display = 'flex';
                    disableGrid();
                }
                else if(currentPlayer == player1 && currentPlayer == 'O'){
                    document.querySelector('.container-player1-wins').style.display = 'flex';
                    disableGrid();
                }
                else if(currentPlayer == player2 && currentPlayer == 'X'){
                    document.querySelector('.container-player2-wins').style.display = 'flex';
                    disableGrid();
                }
            
            }
            else if(check_draw(board)){
                updateScore('TIE');
                document.querySelector('.container-round-tied').style.display = 'flex';
                disableGrid();
            }
            else{
                currentPlayer = currentPlayer === player1 ? player2 : player1;
                updateTurnDisplay()
            }
        }
    })
});

function resetBoard() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    updateScore();
    currentPlayer = 'X';
    updateTurnDisplay();
    gridContainer.forEach(cell => cell.innerHTML = '');
    enableGrid();
}

function resetGame(){
    resetBoard();
    scoreX = 0
    scoreO = 0
    scoreTies = 0;
    document.querySelector('.score-X').innerText = 0;
    document.querySelector('.score-O').innerText = 0;
    document.querySelector('.score-tie').innerText = 0;
}

function updateTurnDisplay(){
    turnIcon.innerHTML = currentPlayer == 'X' ? turnX : turnO;
}

function disableGrid() {
    gridContainer.forEach(cell => cell.classList.add('disabled'));
}

function enableGrid() {
    gridContainer.forEach(cell => cell.classList.remove('disabled'));
}

function updateScore(winner){
    if (winner == 'X') {
        scoreX++;
        document.querySelector('.score-X').textContent = scoreX;
    } else if (winner == 'O') {
        scoreO++;
        document.querySelector('.score-O').textContent = scoreO;
    } else if (winner == 'TIE') {
        scoreTies++;
        document.querySelector('.score-tie').textContent = scoreTies;
    }
}

function handleClick(row, col){
    if(board[row][col] == ' '){
        board[row][col] = currentPlayer;
    }
    const cell = document.querySelector(`.block-${row}-${col}`);
    if(currentPlayer == 'X'){
        cell.innerHTML = xSvgGame;
    }
    else{
        cell.innerHTML = oSvgGame;
    }
}

for(let i = 0; i < 3; i++){
    boardGame.push(Array.from(gridContainer).slice(i * 3, i * 3 + 3));
}

function check_win(board, player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
    return false;
}

function check_draw(board){
    for (let row = 0; row < 3; row++){
        for (let col = 0; col < 3; col++){
            if (board[row][col] == ' '){
                return false;
            }
        }
    }
    return true;
}

function isBoardFull(board){
    return board.flat().every(cell => cell != ' ');
}

function evaluate(board){
    if(check_win(board, player2)) return 10;
    if(check_win(board, player1)) return -10;
    return 0;
}

function minimax(board, depth, isMaximazing){
    let score = evaluate(board);
    if(score === 10) return score;
    if(score === -10) return score;
    if(check_draw(board)) return 0;

    if(isMaximazing){
        let best_score = -Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] == ' '){
                    board[i][j] = player2;
                    best_score = Math.max(best_score, minimax(board, depth + 1, false));
                    board[i][j] = ' ';
                }
            }
        }
        return best_score;
    }
    else{
        let best_score = Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] == ' '){
                    board[i][j] = player1;
                    best_score = Math.min(best_score, minimax(board, depth + 1, true));
                    board[i][j] = ' ';
                }
            }
        }
        return best_score;
    }
}
function findBestMove(board){
    let bestValue = -Infinity;
    let bestMove = null;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] == ' '){
                board[i][j] = player2;
                let moveValue = minimax(board, 0, false);
                board[i][j] = ' ';
                if(moveValue > bestValue){
                    bestMove = { i, j };
                    bestValue = moveValue;
                }
            }
        }
    }
    return bestMove;
}

function aiMove(){
    if(currentPlayer == player2){
        const move = findBestMove(board);
        board[move.i][move.j] = player2;
        const cell = document.querySelector(`.block-${move.i}-${move.j}`);
        cell.innerHTML = player2 === 'X' ? xSvgGame : oSvgGame;
        console.log(board);
        console.log(move);
        if(check_win(board, player2)){
            updateScore(player2);
            if(player2 == 'X'){
                containerAIWinsX.style.display= 'flex';
            }
            else{
                containerAIWins.style.display= 'flex';
            }
            disableGrid();
        }
        else if(check_draw(board)){
            updateScore('TIE');
            document.querySelector('.container-round-tied').style.display = 'flex';
            disableGrid();
        }
        else{
            currentPlayer = player1;
            updateScore();
            updateTurnDisplay();
        }
    }
}