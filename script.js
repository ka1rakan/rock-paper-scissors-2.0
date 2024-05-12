function getComputerChoice() {
    let computerChoice = Math.floor(3 * Math.random());
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter: ");
    return humanChoice;
}

function convertChoice(choice) {
    if (choice === 0) {
        return "ROCK";
    } else if (choice === 1) {
        return "PAPER";
    } else if (choice === 2) {
        return "SCISSORS";
    } else {
        return "INVALID";
    }
}

let humanScore = 0;
let computerScore = 0;
let result = document.querySelector(".result");
function playRound() {
    let humanChoice = 0;
    let computerChoice = 0;
    humanChoice = getHumanChoice().toUpperCase();
    computerChoice = convertChoice(getComputerChoice());

    if (humanChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            computerScore++;
            result.innerText = "You lose! Paper beats Rock";
        } else if (computerChoice == "SCISSORS") {
            humanScore++;
            result.innerText = "You win! Rock beats scissors";
        }
    } else if (humanChoice == "PAPER") {
        if (computerChoice == "ROCK") {
            humanScore++;
            result.innerText = "You win! Paper beats rock";
        } else if (computerChoice == "SCISSORS") {
            computerScore++;
            result.innerText = "You lose! Scissors beats paper";
        }
    } else if (humanChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            computerScore++;
            result.innerText = "You lose! Rock beats scissors";
        } else if (computerChoice == "PAPER") {
            humanScore++;
            result.innerText = "You win! Scissors beats paper";
        }
    }
}

