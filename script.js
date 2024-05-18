function getComputerChoice() {
    let choice = Math.floor(3 * Math.random());
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

let buttons = document.querySelectorAll("button");
function setPlayerChoice(button) {
    return button.className.toUpperCase();
}

let playerScore = 0;
let computerScore = 0;

let playerChoice;
let result = document.querySelector(".result");

buttons.forEach(button => button.addEventListener("click", (e) => {
    playerChoice = setPlayerChoice(e.target);
    playRound();
}));

function playRound() {
    let computerChoice = getComputerChoice();

    if (playerChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            computerScore++;
            result.innerText = "You lose! Paper beats Rock"
        } else if (computerChoice == "SCISSORS") {
            playerScore++;
            result.innerText = "You win! Rock beats scissors";
        } else {
            result.innerText = "Tie!";
        }
    } else if (playerChoice == "PAPER") {
        if (computerChoice == "ROCK") {
            playerScore++;
            result.innerText = "You win! Paper beats rock";
        } else if (computerChoice == "SCISSORS") {
            computerScore++;
            result.innerText = "You lose! Scissors beats paper";
        } else {
            result.innerText = "Tie!";
        }
    } else if (playerChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            computerScore++;
            result.innerText = "You lose! Rock beats scissors";
        } else if (computerChoice == "PAPER") {
            playerScore++;
            result.innerText = "You win! Scissors beats paper"
        }
    }
}
