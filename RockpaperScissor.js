//Creating Random Moves
function getCompMove() {
    let Move = '';
    const ramNum = Math.random();
    if (ramNum >= 0 && ramNum < 1 / 3) {
        Move = 'rock';
    } else if (ramNum >= 1 / 3 && ramNum < 2 / 3) { 
        Move = 'paper';
    } else {
        Move = 'scissors';
    }
    return Move;
}

//Initalizing Score object and storing locally
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0,
    tie: 0
};

//Adding Even Listner Instead of onclick attributes
const rock_button=document.querySelector('.rock-btn').
addEventListener('click',()=>{
    playerAction('rock')
})
const paper_button=document.querySelector('.paper-btn').
addEventListener('click',()=>{
    playerAction('paper')
})
const scissor_button=document.querySelector('.scissor-btn').
addEventListener('click',()=>{
    playerAction('scissors')
})

const re_btn=document.querySelector('.mbtn').
addEventListener('click',()=>{
    resetScore();
})

const auto_btn=document.querySelector('.auto-btn').
addEventListener('click',()=>{
    autoPlay();
})

document.body.addEventListener('keydown',(event) =>{
    if(event.key==='r' || event.key==='1'){
        playerAction('rock');
    }else if(event.key ==='p' || event.key==='2'){
        playerAction('paper')
    }
    else if(event.key ==='s' || event.key === '3' ){
        playerAction('scissors')
    }
})





//Updation of score
function UpdateScore(){
    document.querySelector('.score-wins').
    innerHTML=score.wins;
    document.querySelector('.score-losses').
    innerHTML=score.lose;
    document.querySelector('.score-ties').
    innerHTML=score.tie;
}


UpdateScore();
console.log(JSON.parse(localStorage.getItem('score')));

//Checking Match status for user.
function playerAction(playerMove) {
    let compMove = getCompMove();
    let result = '';


    if (playerMove === compMove) {
        result = 'Tie';
    } else if (playerMove === "rock") {
        result = (compMove === "scissors") ? 'Win' : 'Lose';
    } else if (playerMove === "paper") {
        result = (compMove === "rock") ? 'Win' : 'Lose';
    } else if (playerMove === "scissors") {
        result = (compMove === "paper") ? 'Win' : 'Lose';
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
    document.querySelector('.moves').innerHTML=`You: <img src="Images/${playerMove}-emoji.png" class="score-dis">
        Computer: <img src="Images/${compMove}-emoji.png" class="score-dis"></img>`

    UpdateScore()
    
    
}

// External Features


//Reset
function resetScore() {
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;

    localStorage.removeItem('score');
    UpdateScore();
}


//Auto Play
let IntervalId;
let Isauto=false;
function autoPlay(){
    if(!Isauto){
         IntervalId=setInterval(()=>{
            const autoMove= getCompMove();
            playerAction(autoMove);
        },1000);
        Isauto=true;
    }else{
        clearInterval(IntervalId);
        Isauto=false;
    }
}