const ramNum = Math.random();
let compMove = '';
if (ramNum >= 0 && ramNum < 1 / 3) {
    compMove = 'Rock';
} else if (ramNum >= 1 / 3 && ramNum <= 2 / 3) {
    compMove = 'Paper';
} else if (ramNum >= 2 / 3 && ramNum < 1) {
    compMove = 'Scissor';
}

function Paper() {
    if (compMove == 'Paper') {
        alert(`You picked paper. Computer picked ${compMove}.You Tie1`)
    } else if (compMove == 'Rock') {
        alert(`You picked paper. Computer picked ${compMove}.You Win!`)
    } else if (compMove == 'Scissor') {
        alert(`You picked paper. Computer picked ${compMove}.You Lose!`)
    }
}

function Rock() {
    if (compMove == 'Paper') {
        alert(`You picked Rock. Computer picked ${compMove}.You Lose!`)
    } else if (compMove == 'Rock') {
        alert(`You picked Rock. Computer picked ${compMove}.You Tie!`)
    } else if (compMove == 'Scissor') {
        alert(`You picked Rock. Computer picked ${compMove}.You Win!`)
    }
}

function Scissor() {
    if (compMove == 'Paper') {
        alert(`You picked Scissor. Computer picked ${compMove}.You Win!`)
    } else if (compMove == 'Rock') {
        alert(`You picked Scissor. Computer picked ${compMove}.You Lose!`)
    } else if (compMove == 'Scissor') {
        alert(`You picked Scissor. Computer picked ${compMove}.You Tie!`)
    }
}

function reloadPage() {
    location.reload();
}