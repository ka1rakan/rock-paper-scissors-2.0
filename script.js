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
function playRound() {
    let humanChoice = 0;
    let computerChoice = 0;
    humanChoice = getHumanChoice().toUpperCase();
    computerChoice = convertChoice(getComputerChoice());

    if (humanChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            computerScore++;
            console.log("You lose! Paper beats rock");
        } else if (computerChoice == "SCISSORS") {
            humanScore++;
            console.log("You win! Rock beats scissors");
        }
    } else if (humanChoice == "PAPER") {
        if (computerChoice == "ROCK") {
            humanScore++;
            console.log("You win! Paper beats rock");
        } else if (computerChoice == "SCISSORS") {
            computerScore++;
            console.log("You lose! Scissors beats paper");
        }
    } else if (humanChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            computerScore++;
            console.log("You lose! Rock beats scissors");
        } else if (computerChoice == "PAPER") {
            humanScore++;
            console.log("You win! Scissors beats paper");
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}
playGame();