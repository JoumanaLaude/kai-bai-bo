let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let options = ["kai", "bai", "bo"]
    return (options[Math.floor(Math.random() * options.length)])
}

function playRound() {
    let playerSelection = prompt("Do you choose kai, bai, or bo?");
    let computerSelection = computerPlay();

    if ((playerSelection === "kai" && computerSelection === "bai") ||
        (playerSelection === "bai" && computerSelection === "bo") ||
        (playerSelection === "bo" && computerSelection === "kai")) {
        console.log(`You win! ${playerSelection} beats the computer's selection of ${computerSelection}!`)
        playerScore++
    }
    else if (playerSelection === computerSelection) {
        console.log(`This round is a tie! No points earned.`);
    }
    else {
        console.log(`You lose! The computer's selection ${computerSelection} beats ${playerSelection}!`)
        computerScore++
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You won more rounds!");
    }
    else if (computerScore > playerScore) {
        console.log("You lost this game. The computer won more rounds than you.");
    }
    else {
        console.log("The final result is a tie!");
    }
}

// console.log(playRound(playerSelection, computerSelection));

game();