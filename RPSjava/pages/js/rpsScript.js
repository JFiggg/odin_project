// function automatically gets computer's choice
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.random();
    if (randomNum > 0.66) {
        return options[0];
    } else if (randomNum > 0.33) {
        return options[1];
    }
    return options[2];
}

// function asks user for choice, then returns it
function getHumanChoice(choiceNum) {
    const options = ["Rock", "Paper", "Scissors"];
    var choiceNum = prompt("Choose a number 1-3 \n 1: Rock, 2: Paper, 3: Scissors");
    if (choiceNum == 1) {
        return options[0];
    } else if (choiceNum == 2) {
        return options[1];
    }
    return options[2];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Its a tie! Play again."
    } else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
                humanChoice == "Paper" && computerChoice == "Rock" ||
                humanChoice == "Scissors" && computerChoice == "Paper"
    ) {
        const humanWin = `${humanChoice} beats ${computerChoice}, human wins this round`;
        return humanWin;
    } else {
        const computerWin = `${computerChoice} beats ${humanChoice}, computer wins this round`;
        return computerWin;
    }
}

function playGame() {
    let humanWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        if (result.includes("human")) {
            humanWins += 1;
        } else {
            computerWins += 1;
        }
        const currentScore = `\nHuman Score: ${humanWins}\nComputer Score: ${computerWins}`;
        console.log(result);
        console.log(currentScore);
    }
    var winner;
    if (humanWins > computerWins) {
        winner = "Human"
    } else {
        winner = "Computer"
    }

    return `${winner} won the game. `
}

console.log(playGame());
