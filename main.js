let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let options = ["kai", "bai", "bo"]
    return (options[Math.floor(Math.random() * options.length)])
}

function playRound() {
    let playerSelection = prompt("Do you choose kai, bai, or bo?");
    let computerSelection = computerPlay();

    if ((playerSelection === "kai" && computerSelection === "bo") ||
        (playerSelection === "bai" && computerSelection === "kai") ||
        (playerSelection === "bo" && computerSelection === "bai")) {
        alert(`You win this round! ${playerSelection} beats the computer's selection of ${computerSelection}!`)
        playerScore++
    }
    else if (playerSelection === computerSelection) {
        alert(`This round is a tie! No points earned.`);
    }
    else {
        alert(`You lose! The computer's selection ${computerSelection} beats ${playerSelection}!`)
        computerScore++
    }
}

function game() {
    for (let i = 1; i <= 2; i++) {
        playRound();
        console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        alert("You won the game by winning more rounds!");
    }
    else if (computerScore > playerScore) {
        alert("You lost this game. The computer won more rounds than you.");
    }
    else {
        alert("The final result is a tie!");
    }
}

game();