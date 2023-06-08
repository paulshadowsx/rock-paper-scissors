function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
   } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
     if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Paper";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
    } else {
        return "Draw!";
    }
}

const playerSelection = prompt("Make your Choice!\nHint: Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();