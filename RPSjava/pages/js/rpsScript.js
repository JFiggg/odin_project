let computerWins = 0;
let humanWins = 0;

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
    return options[choiceNum]
}

function displayResultHTML(text, classN) {
    const result = document.querySelector(classN);
    const child = result.querySelector(".tempResult");
    if (child) {
        result.removeChild(child);
    }
    const content = document.createElement("p");
    content.classList.add("tempResult"); 
    content.textContent = text;
    result.appendChild(content);
}

function playRound(humanChoice, computerChoice) {
    let message = "";
    if (humanChoice == computerChoice) {
        message = "Its a tie! Play again.";
    } else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
                humanChoice == "Paper" && computerChoice == "Rock" ||
                humanChoice == "Scissors" && computerChoice == "Paper"
    ) {
        humanWins++;
        message = `Human: ${humanChoice},\nComputer: ${computerChoice}\n --- Human wins this round`;
    } else {
        computerWins++;
        message = `Human: ${humanChoice},\n Computer: ${computerChoice}\n --- Computer wins this round`;
    }
    displayResultHTML(message, ".result")
    displayResultHTML(humanWins, "#humanScore");
    displayResultHTML(computerWins, "#computerScore");

    if (humanWins === 5 || computerWins === 5) {
        const winner = humanWins === 5 ? "Human" : "Computer";
        displayResultHTML(`${winner} won the game!`, ".result");

        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
        document.querySelectorAll("button").forEach(btn => btn.disabled = true)
    }
}

const rockbtn = document.querySelector(".rockbtn");
rockbtn.onclick = () => playRound(rockbtn.getAttribute("id"), getComputerChoice());
const paperbtn = document.querySelector(".paperbtn");
paperbtn.onclick = () => playRound(paperbtn.getAttribute("id"), getComputerChoice());
const scissorbtn = document.querySelector(".scissorbtn");
scissorbtn.onclick = () => playRound(scissorbtn.getAttribute("id"), getComputerChoice());


