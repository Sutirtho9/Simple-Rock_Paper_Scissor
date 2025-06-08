function getCompMove() {
    let Move = '';
    const ramNum = Math.random();
    if (ramNum >= 0 && ramNum < 1 / 3) {
        Move = 'Rock';
    } else if (ramNum >= 1 / 3 && ramNum < 2 / 3) { 
        Move = 'Paper';
    } else {
        Move = 'Scissor';
    }
    return Move;
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0,
    tie: 0
};


function UpdateScore(){
    document.querySelector('.score').
    innerHTML=`Wins:${score.wins} Loses:${score.lose} Ties:${score.tie}`;

}
UpdateScore();
console.log(JSON.parse(localStorage.getItem('score')));

function playerAction(playerMove) {
    let compMove = getCompMove();
    let result = '';


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

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.result').innerHTML=`You ${result}!`;
    document.querySelector('.moves').innerHTML=`You picked ${playerMove}. Computer picked ${compMove}`;

    UpdateScore()
    
    
}

function resetScore() {
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;

    localStorage.removeItem('score');
    UpdateScore();
}