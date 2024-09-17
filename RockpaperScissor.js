function getCompMove() {
    let Move = '';
    const ramNum = Math.random();
    if (ramNum >= 0 && ramNum < 1 / 3) {
        Move = 'Rock';
    } else if (ramNum >= 1 / 3 && ramNum < 2 / 3) { // <= changed to <
        Move = 'Paper';
    } else {
        Move = 'Scissor';
    }
    return Move;
}

let score = {
    wins: 0,
    lose: 0,
    tie: 0,
};

function playerAction(playerMove) {
    let compMove = getCompMove();
    let result = '';

    // Check for a tie first
    if (playerMove === compMove) {
        result = 'Tie';
    } else if (playerMove === "Rock") {
        result = (compMove === "Scissor") ? 'Win' : 'Lose';
    } else if (playerMove === "Paper") {
        result = (compMove === "Rock") ? 'Win' : 'Lose';
    } else if (playerMove === "Scissor") {
        result = (compMove === "Paper") ? 'Win' : 'Lose';
    }


    if (result === 'Win') {
        score.wins += 1;
    } else if (result === 'Lose') {
        score.lose += 1;
    } else if (result === 'Tie') {
        score.tie += 1;
    }

    alert(`You picked ${playerMove}. Computer picked ${compMove}. You ${result}!
W:${score.wins} L:${score.lose} T:${score.tie}`);
}

function resetScore() {
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;
}