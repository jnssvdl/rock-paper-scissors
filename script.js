function getComputerChoice() {
    let result;
    randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        result = "rock";
    } else if (randomInt === 1) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
}


function updateScore() {
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
}


function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "It's a tie!";
        } else if (computerSelection === "paper") {
            computerScore += 1;
            result = "You lose! Paper beats rock.";
        } else if (computerSelection === "scissors") {
            playerScore += 1;
            result = "You win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore += 1;
            result = "You win! Paper beats rock.";
        } else if (computerSelection === "paper") {
            result = "It's a tie!";
        } else if (computerSelection === "scissors") {
            computerScore += 1;
            result = "You lose! Scissors beats paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            result = "You lose! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            playerScore += 1;
            result = "You win! Scissors beats paper.";
        } else if (computerSelection === "scissors") {
            result = "It's a tie!";
        }
    }
    
    updateScore();
    return result; 
}


function endGame(choices) {
    choices.forEach((choice) => {
        choice.disabled = true;
    });
    playerScore = 0;
    computerScore = 0;
    document.getElementById('new-game').setAttribute('style', 'visibility: visible;');
}

function game() {
    let playerSelection;
    const choices = document.querySelectorAll('.choice');
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {

            playerSelection = choice.id;
            const computerSelection = getComputerChoice();

            displayContent.textContent = playRound(playerSelection, computerSelection);

            const displayEmojiPlayer = playerSelection === "rock" ? "✊" : 
            playerSelection === "paper" ? "✋" : 
            playerSelection === "scissors" ? "✌" : '';

            const displayEmojiComputer = computerSelection === "rock" ? "✊" : 
            computerSelection === "paper" ? "✋" : 
            computerSelection === "scissors" ? "✌" : '';

            displayPlayerSelection.textContent = displayEmojiPlayer;
            displayComputerSelection.textContent = displayEmojiComputer;

            if (playerScore === 5) {
                displayContent.textContent = "Congratulations! You won the game.";
                endGame(choices);
            } else if (computerScore === 5) {
                displayContent.textContent = "Game over! You lost the game.";
                endGame(choices);
            }

        });
    });
}


const display = document.querySelector('.display');
const displayContent = document.createElement('h2');
displayContent.textContent = "The first one to reach a score of 5 wins!";
display.appendChild(displayContent);

let playerScore = 0;
let computerScore = 0;

const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');

displayPlayerScore.textContent = playerScore;
displayComputerScore.textContent = computerScore;

const displayPlayerSelection = document.querySelector('#player-selection');
const displayComputerSelection = document.querySelector('#computer-selection');

game();